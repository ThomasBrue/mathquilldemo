import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { env, mainModule } from 'process';
import { HostListener } from '@angular/core';
// import * as nerdamer from 'nerdamer/all';
import { ConverterService } from './converter.service';
//import { ConverterService } from './converter.service';
//import * as math from 'mathjs';
//import * as _ from 'lodash';
import { PostConverterService } from './post-converter.service';
import * as math from 'mathjs';
import * as nerdamer from 'nerdamer/all';

enum ButtonType {
  OPERATIONAL = 'OPERATIONAL',
  REGULAR = 'REGULAR',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'mathquill';
  //  normalKey: any;
  specialKey_1: String = '';

  latexToConvert = '';

  myLatex = '';
  oldLatex = '';
  mathFieldXXX;
  resultLatex = '';

  myResultString = '2x+4^x+7';

  previousSibling: Element;
  nextSibling: Element;
  parentElement: Element;

  curserInsertionPoint: any;

  afterViewInitOver = false;
  deleteOnlySolution = false;

  constructor(
    private converterService: ConverterService,
    private postConverterService: PostConverterService
  ) {
    document.addEventListener(
      'click',
      function (e) {
        console.log('TARGET-click: ', e.target);
      },
      false
    );

    document.addEventListener(
      'keyup',
      function (e) {
        console.log('TARGET-keyup: ', e.target);
      },
      false
    );

    console.log(
      'SOLVER-DEMO-0: ',
      nerdamer('x+2y=y-7x').solveFor('x').toString()
    );

    console.log(
      'SOLVER-DEMO-1: ',
      nerdamer('x^2+2=y-7*a').solveFor('x').toString()
    );
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
    console.log('Keydown: ', event.key);

    if (this.specialKey_1 == '' && event.key === 'Control') {
      this.specialKey_1 = event.key;
    }

    if (this.specialKey_1 == 'Control') {
      switch (event.key) {
        case ',':
          for (let i = 0; i < 50; i++) {
            this.MQ.MathField(this.mathField).keystroke('Right');
          }
          this.MQ.MathField(this.mathField).write('\\rightarrow');

          this.resultLatex = this.postConverterService.postConvertLatex(
            this.resultLatex
          );
          this.MQ.MathField(this.mathField).write(this.resultLatex);

          break;
        case 'i':
          this.MQ.MathField(this.mathField).cmd('\\intIndef');
          break;
        case '\\': // square root
          //    this.MQ.MathField(this.mathField).write('\\sqrt{}');
          this.MQ.MathField(this.mathField).cmd('\\sqrt');
          // this.MQ.MathField(this.mathField).keystroke('Left');
          break;
      }
    } else {
      switch (event.key) {
        //----Keystroke Commands-----------------------------------------------------------------------------------------------------------------
        case '=':
          for (let i = 0; i < 50; i++) {
            this.MQ.MathField(this.mathField).keystroke('Right');
          }

          let result: any;
          try {
            result = math.parse(this.resultLatex).evaluate();
          } catch (error) {
            console.log('divArray: ', document.getElementsByTagName('div'));

            console.log('LENGTH: ', error.toString().length);
            let i = error.toString().length;

            let errorVar: string;

            for (; i > 0; i--) {
              console.log(
                'inLoop_333: ',
                error.toString()[i],
                i,
                error.toString()
              );
              if (error.toString()[i] === ' ') {
                errorVar = error
                  .toString()
                  .substring(i, error.toString().length);
                break;
              }
            }

            let varTags = document.getElementsByTagName('var');
            let searchText = errorVar;
            let found: any;

            varTags[0].classList.add('addCSS');
            for (let i = 0; i < varTags.length; i++) {
              console.log(
                'el: ',
                varTags[i].innerHTML,
                searchText,
                varTags[i].innerHTML.trim() == searchText.trim()
              );
              if (varTags[i].innerHTML.trim() == searchText.trim()) {
                found = varTags[i];
                found.classList.add('addCSS');
                found.style.color = 'red';
                found.style['font-weight'] = 'bold';

                setTimeout(() => {
                  found.style.color = 'black';
                  found.style['font-weight'] = 'normal';
                }, 3000);
                setTimeout(() => {
                  this.MQ.MathField(this.mathField).keystroke('Backspace');
                }, 100);
              }
            }
          }

          if (result) {
            this.MQ.MathField(this.mathField).write('=');
            this.MQ.MathField(this.mathField).write(result);
          }

          break;

        case '"':
          this.MQ.MathField(this.mathField).write(' \\overline{}');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;
        //----Calculator Toolbar----------------------------------------------------------------------------------------------------------------
        case '|': // Absolute value
          this.MQ.MathField(this.mathField).write('\\left |  \\right |');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;

        case "'": // Parentheses
          //  this.MQ.MathField(this.mathField).write("( )");
          this.MQ.MathField(this.mathField).write('\\left (  \\right )');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;

        case '#': // nth root (Calculator Toolbar)
          this.MQ.MathField(this.mathField).write('\\nthroot{}{}');
          this.MQ.MathField(this.mathField).keystroke('Left');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;

        //----Calculus Toolbar---------------------------------------------------------------------------------------------------------------------
        case '?': // derivative
          //   this.MQ.MathField(this.mathField).write('\\frac{d}{dx}');
          this.MQ.MathField(this.mathField).cmd('\\deriOne');
          break;
        case '&': // indefinite integral (Calculus Toolbar)
          this.MQ.MathField(this.mathField).cmd('\\intDef');
          break;

        case 'Backspace':
          this.deleteOnlyResult();
      }
    }
  }

  deleteOnlyResult() {
    this.deleteOnlySolution = true;

    if (this.myLatex.includes('rightarrow')) {
      let beforeArrow = this.myLatex.substring(
        0,
        this.myLatex.indexOf('\\rightarrow')
      );
      this.MQ.MathField(this.mathField).keystroke('End');
      for (let i = 0; i < 60; i++) {
        this.MQ.MathField(this.mathField).keystroke('Backspace');
      }
      this.MQ.MathField(this.mathField).write(beforeArrow);
    } else if (this.myLatex.includes('=')) {
      let beforeArrow = this.myLatex.substring(0, this.myLatex.indexOf('='));
      this.MQ.MathField(this.mathField).keystroke('End');
      for (let i = 0; i < 60; i++) {
        this.MQ.MathField(this.mathField).keystroke('Backspace');
      }
      this.MQ.MathField(this.mathField).write(beforeArrow);
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyupEvent(event: KeyboardEvent) {
    //-------------------------------------------------------------------------

    if (event.key == 'Control') {
      this.specialKey_1 = '';
    }

    this.myLatex = this.mathFieldXXX.latex();

    /*     console.log('newLatex: ', this.myLatex);
    console.log('oldLatex: ', this.oldLatex); */

    //--------------------------------------------------------------------------------------------
    console.log(
      'LEFT-side: ',
      this.myLatex.substr(0, this.myLatex.indexOf('\\rightarrow'))
    );

    console.log(
      'RIGHT-side: ',
      this.myLatex.substr(
        this.myLatex.indexOf('\\rightarrow'),
        this.myLatex.length
      )
    );

    if (
      this.myLatex.indexOf('\\rightarrow') >= 0 &&
      this.oldLatex.indexOf('\\rightarrow') >= 0
    ) {
      if (
        this.myLatex.substr(0, this.myLatex.indexOf('\\rightarrow')).length !==
        this.myLatex.substr(0, this.oldLatex.indexOf('\\rightarrow')).length
      ) {
        /*         console.log(
          'new: ',
          this.myLatex.substr(0, this.myLatex.indexOf('\\rightarrow'))
        );
        console.log(
          'old: ',
          this.myLatex.substr(0, this.oldLatex.indexOf('\\rightarrow'))
        );
 */
        console.log('newLatex: ', this.myLatex);
        console.log('oldLatex: ', this.oldLatex);

        for (
          let i = 0;
          i <
          this.myLatex.substr(0, this.myLatex.indexOf('\\rightarrow')).length;
          i++
        ) {
          if (
            this.myLatex
              .substr(0, this.myLatex.indexOf('\\rightarrow'))
              .charAt(i) !==
            this.oldLatex
              .substr(0, this.oldLatex.indexOf('\\rightarrow'))
              .charAt(i)
          ) {
            console.log(
              'indexOfDifference: ',
              this.myLatex
                .substr(0, this.myLatex.indexOf('\\rightarrow'))
                .charAt(i),
              ' numberIndex: ',
              i
            );
            console.log('workingWith-LEFT: ', this.myLatex.substr(0, i));

            const leftSide = this.myLatex.substr(0, i + 1);

            console.log(
              'workingWith-RIGHT: ',
              this.myLatex.substr(i, this.myLatex.indexOf('\\rightarrow'))
            );

            const rightSide = this.myLatex.substr(
              i + 1,
              this.myLatex.indexOf('\\rightarrow') - 2
            );

            console.log(
              'workingWith: ',
              this.myLatex.substr(0, this.myLatex.indexOf('\\rightarrow'))
            );

            //-----------------------------------------------------------------------------------

            console.log('XXX-left: ', leftSide);
            console.log('XXX-right: ', rightSide);

            /*             for (let i = 0; i < 60; i++) {
              this.MQ.MathField(this.mathField).keystroke('Right');
            }
            for (let i = 0; i < 60; i++) {
              this.MQ.MathField(this.mathField).keystroke('Backspace');
            }

            this.MQ.MathField(this.mathField).write(rightSide);

            for (let i = 0; i < 60; i++) {
              this.MQ.MathField(this.mathField).keystroke('Left');
            }

            this.MQ.MathField(this.mathField).write(leftSide); */
            //----------------------------------------------------------------

            break;
            //  console.log('final-left: ', this.myLatex.substr(0, i));
          }
        }

        console.log('Aaaaahhh left has changed!');
        //    this.deleteOnlyResult();
        console.log('AFTER: ', this.myLatex);
      }
    }
    //-------------------------------------------------------------------------------------------

    this.resultLatex = this.converterService.convertLatex(this.myLatex);

    this.oldLatex = this.myLatex;
  }

  MQ = null;
  mathField;

  buttons = [
    this.buildRegularButton('+'),
    this.buildRegularButton('-'),
    this.buildRegularButton('*'),
    this.buildRegularButton('.'),
    this.buildRegularButton('='),

    this.buildRegularButton('^', '1_superscript.png'),
    this.buildRegularButton('\\frac', '2_frac_v1.png'),
    this.buildWriteButton('\\frac{d}{dx}', '2_frac_v2_mathrm.png'),

    this.buildWriteButton('\\frac{\\text{d}}{\\text{d}x}', 'idiot'),

    this.buildWriteButton(
      '\\frac{\\partial }{\\partial x}',
      '2_frac_v2_partial.png'
    ),

    this.buildRegularButton('\\sum', '3_sum.png'),
    this.buildRegularButton('\\sqrt', '4_sqrt_v1.png'),
    this.buildWriteButton('\\sqrt[]{}', '4_sqrt_v2.png'),

    this.buildRegularButton('\\int', '7_int_v1.png'),
    this.buildRegularButton('\\intx', '7_int_v2.png'),
    this.buildRegularButton('\\inty', '7_int_v1.png'),

    this.buildWriteButton('_{}\\textrm{}', '9_textrm_v1_down.png'),
    this.buildWriteButton('^{}\\textrm{}', '9_textrm_v2_up.png'),
    this.buildWriteButton('_{}^{}\\textrm{}', '9_textrm_v3_upDown.png'),
    this.buildWriteButton('_{}', '11_subscript.png'),

    this.buildWriteButton('\\rightarrow', '13_rightArrow_v1.png'),

    //--------------------------------------------------------------------

    this.buildOperationalButton('Backspace', 'myBackspace'),
    this.buildOperationalButton('Shift-Left', 'Shift-Left'),
    this.buildOperationalButton('Left', 'Left'),
    this.buildOperationalButton('Up', 'Up'),
    // mathField.keystroke('Shift-Left');

    this.buildRegularButton('\\intIndef', '7_int_v1.png'),
    this.buildRegularButton('\\intDef', '7_int_v2.png'),

    this.buildRegularButton('\\deriOne', '2_frac_v2_mathrm.png'),
    this.buildRegularButton('\\deriNth', '12_deriNth_v1.png'),

    this.buildRegularButton('\\matrix', 'matrix'),

    // \begin{matrix}c&\\&\end{matrix}        --> OUTPUT--SOLL
    // \begin{matrix}\frac{ }{ }&\&\end{matrix}     --> HABEN

    //  this.buildWriteButton('\\begin{matrix}c&\\\\&\\end{matrix}', 'writeMatrix'),
    /* this.buildWriteButton(
      '\\begin{matrix}c&\\\\&\\\\&\\end{matrix}',
      'writeMatrix'
    ), */
    this.buildWriteButton(
      '\\begin{matrix}&&&\\\\&\\\\&\\\\&\\end{matrix}',
      'writeMatrix'
    ),

    this.buildWriteButton('\\deriOne{x}{x^2+\\deriOne{x}{x^3}}', 'AAAA'),

    this.buildWriteButton('\\intIndef{x^2+\\intIndef{x^3}{x}}{x}', 'BBBB'),
    this.buildWriteButton('s\\cdot \\frac{w\\cdot u}{t}\\cdot d', 'CCCC'),
  ];

  latexToMath(str: string) {
    this.buttons.push(
      this.buildWriteButton(str, 'AAAA')
      //     this.buildWriteButton('\\int_{ }^{ }k=\\intx_2^4f(x)', 'AAAA')
    );
  }

  ngAfterViewInit() {
    this.mathField = document.getElementById('math-field');
    let latexSpan = document.getElementById('latex');

    this.MQ = (window as any).MathQuill.getInterface(2);
    this.mathFieldXXX = this.MQ.MathField(this.mathField, {
      /* substituteTextarea: () => {
        return document.getElementById('substitue-id');
      }, */
      spaceBehavesLikeTab: true,
      /* handlers: {
        edit: function () {
          latexSpan.textContent = this.mathFieldXXX.latex();
        },
      }, */
    });

    this.MQ.MathField(this.mathField).focus();

    let element: HTMLElement = document.getElementsByClassName(
      'mq-root-block'
    )[0] as HTMLElement;

    console.log('HTML_element: ', element);
    element.click();
    element.dispatchEvent(new Event('click'));

    this.afterViewInitOver = true;
  }

  onClickMathButton(e: any, button) {
    console.log(e, button);
    if (button.action === 'write') {
      this.MQ.MathField(this.mathField).write(button.content);
    } else if (button.action === 'cmd') {
      this.MQ.MathField(this.mathField).cmd(button.content);
    } else {
      this.MQ.MathField(this.mathField).keystroke(button.content);
    }
    this.MQ.MathField(this.mathField).focus();
    e.preventDefault();

    this.myLatex = this.mathFieldXXX.latex();

    this.resultLatex = this.converterService.convertLatex(this.myLatex);
  }

  private buildRegularButton(content: string, displayContent?: string) {
    return {
      displayContent: displayContent ? displayContent : '',
      content: content,
      type: ButtonType.REGULAR,
      action: 'cmd',
    };
  }

  private buildWriteButton(content: string, displayContent?: string) {
    return {
      displayContent: displayContent ? displayContent : '',
      content: content,
      type: ButtonType.REGULAR,
      action: 'write',
    };
  }

  private buildOperationalButton(content: any, iconId: any, iconType?: string) {
    return {
      content: content,
      displayContent: iconId,
      action: 'keystroke',
      iconId: iconId,
      iconType: iconType ? iconType : 'material',
      type: ButtonType.OPERATIONAL,
    };
  }
}

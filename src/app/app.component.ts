import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { env, mainModule } from 'process';
import { HostListener } from '@angular/core';
// import * as nerdamer from 'nerdamer/all';
import { ConverterService } from './converter.service';
//import { ConverterService } from './converter.service';
//import * as math from 'mathjs';
//import * as _ from 'lodash';
import { PostConverterService } from './post-converter.service';

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
  mathFieldXXX;
  resultLatex = '';

  myResultString = '2x+4^x+7';

  constructor(
    private converterService: ConverterService,
    private postConverterService: PostConverterService
  ) {
    /////////MATH_JS//////////////////////////////////////////////////////////////////////////////////////
    // math.evaluate('1.2 * (2 + 4.5)');
    ///////NERDAMER/////////////////////////////////////////////////////////////////////////////////////
    /*     //--Evaluation----evaluate()------------------------------------------------------------------------------------
    console.log(nerdamer('x^2', { x: '2' }).evaluate().text('fractions')); // 4
    //--Differentiation----diff()------------------------------------------------------------------------------------
    console.log(nerdamer('diff(x^2,x)').text('fractions')); // 2*x
    //--integration-Indefinite----integrate()------------------------------------------------------------------------------------
    console.log(nerdamer('integrate(cos(x),x)').text('fractions')); // sin(x)
    //--integration-Definite----integrate()------------------------------------------------------------------------------------
    console.log(nerdamer('defint(e^(cos(x)), 1, 2)').text('decimals', 7)); // 1.112780
    //--simplify----simplify()------------------------------------------------------------------------------------------------
    console.log(nerdamer('simplify((x^2+4*x-45)/(x^2+x-30))').toString()); // (6+x)^(-1)*(9+x) */
  }
  // latexSpan = document.getElementById('latex');

  // Link to Github Mathquill-Matrix:
  // https://github.com/Learnosity/mathquill/blob/matrix/src/commands/math/commands.js

  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
    console.log('Keydown: ', event.key);
    if (this.specialKey_1 == '' && event.key === 'Control') {
      this.specialKey_1 = event.key;
    }

    if (this.specialKey_1 == 'Control') {
      switch (event.key) {
        case ',':
          for (let i = 0; i < 20; i++) {
            this.MQ.MathField(this.mathField).keystroke('Right');
          }
          this.MQ.MathField(this.mathField).write('\\rightarrow');
          //     this.MQ.MathField(this.mathField).write(this.myResultString);

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
        case '_':
          this.MQ.MathField(this.mathField).write('_{}');
          this.MQ.MathField(this.mathField).keystroke('Down');
          break;
        /*  case '*':
          this.MQ.MathField(this.mathField).write('\\cdot');
          break; */

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
    if (this.myLatex.includes('rightarrow')) {
      let beforeArrow = this.myLatex.substring(
        0,
        this.myLatex.indexOf('\\rightarrow')
      );

      for (let i = 0; i < 60; i++) {
        this.MQ.MathField(this.mathField).keystroke('Right');
      }
      for (let i = 0; i < 60; i++) {
        this.MQ.MathField(this.mathField).keystroke('Backspace');
      }

      this.MQ.MathField(this.mathField).write(beforeArrow);
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyupEvent(event: KeyboardEvent) {
    console.log('Keyup: ', event.key);
    console.log('myLatex: ', this.myLatex);

    if (event.key == 'Control') {
      this.specialKey_1 = '';
    }

    this.myLatex = this.mathFieldXXX.latex();

    this.resultLatex = this.converterService.convertLatex(this.myLatex);
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

    /*     setTimeout(() => {
      console.log('GGG: ', this.mathFieldXXX.latex());

      this.myLatex = this.mathFieldXXX.latex();
    }, 5000); */
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

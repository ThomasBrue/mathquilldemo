import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { env, mainModule } from 'process';
import { HostListener } from '@angular/core';

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
  normalKey: any;
  specialKey_1: String;
  specialKey_2: String;

  setFocus() {}

  /*   $('.mathquill-editable textarea').trigger(customKeyDownEvent); */

  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
    console.log('Keydown: ', event.key);
    if (this.specialKey_1 == '') {
      if (event.key === 'Shift') {
        this.specialKey_1 = event.key;
      } else if (event.key === 'Alt') {
        this.specialKey_1 = event.key;
      } else if (event.key === 'Control') {
        this.specialKey_1 = event.key;
      }
    } else if (this.specialKey_1 == 'Control' && event.key == 'AltGraph') {
      this.specialKey_1 = 'Control';
    }

    if (this.specialKey_1 == 'Control') {
      switch (event.key) {
        case '\\': // nth root (Calculator Toolbar)
          this.MQ.MathField(this.mathField).write('\\sqrt[]{}');
          break;
        case '?': // nth derivative (Calculus Toolbar)
          this.MQ.MathField(this.mathField).write(
            '\\frac{\\mathrm{d}^{n} }{\\mathrm{d} x^{n}}'
          );
          break;

        case 'i': // Definite integral (Calculus Toolbar)
          this.MQ.MathField(this.mathField).write('\\int_{}^{}');
          break;
      }
    } else {
      switch (event.key) {
        //----Keystroke Commands-----------------------------------------------------------------------------------------------------------------

        case '_':
          this.MQ.MathField(this.mathField).write('_{}');
          this.MQ.MathField(this.mathField).keystroke('Down');
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

        case ':': // Definition
          this.MQ.MathField(this.mathField).write(':=');
          break;

        case '=': // Evaluate numerically
          this.MQ.MathField(this.mathField).write('=');
          break;

        case '/': // Division
          this.MQ.MathField(this.mathField).write('\\frac{}{}');
          this.MQ.MathField(this.mathField).keystroke('Up');
          break;

        case '*': // Multiplication
          this.MQ.MathField(this.mathField).write('\\cdot');
          break;

        case 'Dead': // Exponentiation
          this.MQ.MathField(this.mathField).write('^{}');
          this.MQ.MathField(this.mathField).keystroke('Up');
          break;

        case "'": // Parentheses
          this.MQ.MathField(this.mathField).write('( )');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;

        case '\\': // square root
          this.MQ.MathField(this.mathField).write('\\sqrt{}');
          this.MQ.MathField(this.mathField).keystroke('Left');
          break;

        //----Calculus Toolbar---------------------------------------------------------------------------------------------------------------------
        case '?': // derivative
          this.MQ.MathField(this.mathField).write('\\frac{d}{dx}');
          break;

        default:
          if (
            event.key !== 'Shift' &&
            event.key !== 'AltGraph' &&
            event.key !== 'Backspace' &&
            event.key !== 'ArrowUp' &&
            event.key !== 'ArrowDown' &&
            event.key !== 'ArrowRight' &&
            event.key !== 'ArrowLeft' &&
            event.key !== 'Control' &&
            event.key !== 'Shift' &&
            event.key !== 'Alt' &&
            event.key !== 'CapsLock'
          ) {
            this.myFunction(event.key);
          }
      }
    }
  }

  myFunction(keyBoardInput: any) {
    this.MQ.MathField(this.mathField).write(keyBoardInput);
    this.MQ.MathField(this.mathField).focus();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyupEvent(event: KeyboardEvent) {
    console.log('Keyup: ', event.key);

    if (event.key == 'Shift' || event.key == 'Alt' || event.key == 'Control') {
      this.specialKey_1 = '';
      this.specialKey_2 = '';
      if (event.key == 'Control') {
        this.specialKey_1 = 'Control';
      }
    }
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

    /* this.buildWriteButton('\\frac{\\text{d}}{\\text{d}x}', 'idiot'), */

    this.buildWriteButton(
      '\\frac{\\partial }{\\partial x}',
      '2_frac_v2_partial.png'
    ),

    this.buildRegularButton('\\sum', '3_sum.png'),
    this.buildRegularButton('\\sqrt', '4_sqrt_v1.png'),
    this.buildWriteButton('\\sqrt[]{}', '4_sqrt_v2.png'),

    this.buildRegularButton('\\int', '7_int_v1.png'),

    this.buildWriteButton('_{}\\textrm{}', '9_textrm_v1_down.png'),
    this.buildWriteButton('^{}\\textrm{}', '9_textrm_v2_up.png'),
    this.buildWriteButton('_{}^{}\\textrm{}', '9_textrm_v3_upDown.png'),
    this.buildWriteButton('_{}', '11_subscript.png'),

    /*     this.buildRegularButton('\\bigcap', '5_bigcap_v1.png'),
    this.buildWriteButton('\\bigcap_{}^{}', '5_bigcap_v2.png'), */

    //--------------------------------------------------------------------

    this.buildOperationalButton('Backspace', 'myBackspace'),
    this.buildOperationalButton('Shift-Left', 'Shift-Left'),
    this.buildOperationalButton('Left', 'Left'),
    this.buildOperationalButton('Up', 'Up'),
    // mathField.keystroke('Shift-Left');
  ];

  constructor() {}
  // latexSpan = document.getElementById('latex');

  ngAfterViewInit() {
    this.mathField = document.getElementById('math-field');
    var latexSpan = document.getElementById('latex');
    this.MQ = (window as any).MathQuill.getInterface(2);
    var mathField = this.MQ.MathField(this.mathField, {
      substituteTextarea: () => {
        return document.getElementById('substitue-id');
      },
      spaceBehavesLikeTab: true,
      handlers: {
        edit: function () {
          latexSpan.textContent = mathField.latex();
        },
      },
    });
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

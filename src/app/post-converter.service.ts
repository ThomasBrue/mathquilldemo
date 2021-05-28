import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostConverterService {
  constructor() {}

  public postConvertLatex(latexInput: string): string {
    console.log('IN: ', latexInput);
    latexInput = latexInput.replace(/\*/g, ' \\cdot ');

    latexInput = this.toThePowerConverter(latexInput);

    latexInput = this.convertFractionToLatexFraction(latexInput);

    /*     const inputLength: number = latexInput.length;
    let j: number;

    for (let i = 0, j = 0; i < inputLength; i++, j++) {
      latexInput = [latexInput.slice(0, j), '^', latexInput.slice(j)].join('');
      j++;
    } */

    console.log('OUT: ', latexInput);

    return latexInput;
  }

  convertFractionToLatexFraction(str: string): string {
    console.log('fractionIN: ', str);

    while (str.indexOf(' / ') >= 0) {
      const indexOfSlash = str.indexOf(' / ');
      console.log(indexOfSlash);

      str = str.replace(' / ', ' }{ ');
      str = '\\frac{' + str + '}';
    }

    // + + * /
    //    / --> anchor point
    // + -   --> seperator

    //  IN-0:  \frac{x}{y}
    //  OUT-0:   x / y
    //  WANT-0:  \frac{x }{ y}

    //  IN-1: \frac{x\cdot c}{y}             Multiply
    //  OUT-1:  x  \cdot  c / y
    //  WANT-1:  \frac{x  \cdot  c }{ y}

    //  IN-1:  \frac{x+c}{y}                 Addition
    //  OUT-1: (x + c) / y
    //  WANT-1:  \frac{x + c }{ y}

    //  IN-2:  2x^3+\frac{x^2}{y}+3v
    //  OUT-2:   2 x ^ 3 + x ^ 2 / y + 3 v
    //  WANT-2:   2 x ^ 3 + \frac{x ^ 2}{ y} + 3 v

    // IN-3:    2x^3+\frac{x^2+c}{y}+3v
    // OUT-3:   2 x ^ 3 + (x ^ 2 + c) / y + 3 v
    // WANT-3:   2 x ^ 3 + \frac{x ^ 2 + c}{y} + 3 v

    //  IN-4:   2x^3+\frac{x^2\cdot c}{y}+3v
    //  OUT-4:  2 x ^ 3 + x ^ 2  \cdot  c / y + 3 v
    //  WANT-4:  2 x ^ 3 + \frac{x ^ 2  \cdot  c }{ y} + 3 v

    return str;
  }

  toThePowerConverter(str: string): string {
    /*  console.log('XXX_IN: ', str); */
    while (str.indexOf(' ^ (') >= 0) {
      console.log('HAS ^ (');
      let brackedCount = 0;
      let start: number = str.indexOf(' ^ (') + 3;
      for (let i = start; i < str.length; i++) {
        /*   console.log('PPP: ', str.charAt(i)); */
        if (str.charAt(i) == '(') {
          brackedCount++;
        } else if (str.charAt(i) == ')') {
          brackedCount--;
        }
        if (brackedCount == 0) {
          /*   console.log('LEFT: ', str.substr(0, i));
          console.log('MIDDLE: ', str.charAt(i));
          console.log('RIGHT: ', str.substr(i, str.length));
          console.log('str: ', str); */

          if (str.charAt(i) === ')') {
            str = str.substr(0, i) + '}' + str.substr(i + 1, str.length);
          }
          str = str.replace(' ^ (', '^{');
          break;
        }
      }
    }

    // x^{w+a^t}+c^2
    /*   console.log('YYY_OUT: ', str); */
    return str;
  }
}

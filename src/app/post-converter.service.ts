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

    /*     const inputLength: number = latexInput.length;
    let j: number;

    for (let i = 0, j = 0; i < inputLength; i++, j++) {
      latexInput = [latexInput.slice(0, j), '^', latexInput.slice(j)].join('');
      j++;
    } */

    console.log('OUT: ', latexInput);

    return latexInput;
  }

  toThePowerConverter(str: string) {
    console.log('XXX_IN: ', str);
    while (str.indexOf(' ^ (') >= 0) {
      console.log('HAS ^ (');
      let brackedCount = 0;
      let start: number = str.indexOf(' ^ (') + 3;
      for (let i = start; i < str.length; i++) {
        console.log('PPP: ', str.charAt(i));
        if (str.charAt(i) == '(') {
          brackedCount++;
        } else if (str.charAt(i) == ')') {
          brackedCount--;
        }
        if (brackedCount == 0) {
          console.log('LEFT: ', str.substr(0, i));
          console.log('MIDDLE: ', str.charAt(i));
          console.log('RIGHT: ', str.substr(i, str.length));
          console.log('str: ', str);

          if (str.charAt(i) === ')') {
            str = str.substr(0, i) + '}' + str.substr(i + 1, str.length);
          }
          str = str.replace(' ^ (', '^{');
          break;
        }
      }
    }

    // x^{w+a^t}+c^2
    console.log('YYY_OUT: ', str);
    return str;
  }
}

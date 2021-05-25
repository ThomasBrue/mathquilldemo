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
    while (str.indexOf('^(') >= 0) {
      console.log('HAS ^(');
      let brackedCount = 0;
      let start: number = str.indexOf('^(') + 1;
      for (let i = start; i < str.length; i++) {
        console.log('PPP: ', str.charAt(i));
        if (str.charAt(i) == '(') {
          brackedCount++;
        } else if (str.charAt(i) == ')') {
          brackedCount--;
        }
        if (brackedCount == 0) {
          console.log('LAST: ', str.charAt(i));
          console.log('AAA: ', str.substr(0, i));
          console.log('BBB: ', str.substr(i + str.length));

          if (str.charAt(i) === ')') {
            str = str.substr(0, i) + '}' + str.substr(i + 1 + str.length);
          }
          str = str.replace('^(', '^{');
          break;
        }
      }
    }

    console.log('YYY_IN: ', str);
    return str;
  }

  /*   private fractionConverter(str: string): string {
    while (str.indexOf('frac') >= 0) {
      let brackedCount = 0;
      let start: number = str.indexOf('frac') + 4;
      for (let i = start; i < str.length; i++) {
        if (str.charAt(i) == '(') {
          brackedCount++;
        } else if (str.charAt(i) == ')') {
          brackedCount--;
        }
        if (brackedCount == 0) {
          str = str.slice(0, i + 1) + '/' + str.slice(i + 1);
          str = str.replace('frac', '');
          break;
        }
      }
    }
    return str;
  } */

  /*   private cleanLatex(latexInput: string): string {
    while (latexInput.indexOf('\\frac') >= 0) {
      latexInput = latexInput.replace('\\frac', 'frac');
    }
    while (latexInput.indexOf('\\f') >= 0) {
      latexInput = latexInput.replace('\\frac', 'frac');
    }
    latexInput = latexInput.replace(/{/g, '(');
    latexInput = latexInput.replace(/}/g, ')');
    latexInput = latexInput.replace(/\\cdot/g, '*');
    return latexInput;
  } */
}

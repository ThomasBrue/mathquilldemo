import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostConverterService {
  constructor() {}

  public postConvertLatex(latexInput: string): string {
    console.log('IN: ', latexInput);
    latexInput = latexInput.replace(/\*/g, ' \\cdot ');

    //  latexInput.indexOf("^")

    /* var a = "I want apple";
var b = " an";
var position = 6;
var output = [a.slice(0, position), b, a.slice(position)].join('');
console.log(output); */

    const inputLength: number = latexInput.length;
    let j: number;

    for (let i = 0, j = 0; i < inputLength; i++, j++) {
      latexInput = [latexInput.slice(0, j), '^', latexInput.slice(j)].join('');
      j++;
    }

    // latexInput = 'x^(^y^+^3^)';
    //  latexInput = latexInput.replace(/x/g, 'BBB');
    console.log('OUT: ', latexInput);
    //  latexInput = latexInput.replace(/\\cdot/g, '*');

    return latexInput;
  }

  private cleanLatex(latexInput: string): string {
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
  }
}

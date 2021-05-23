import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostConverterService {
  constructor() {}

  public postConvertLatex(latexInput: string): string {
    console.log('IN: ', latexInput);
    latexInput = latexInput.replace(/\*/g, ' \\cdot ');

    /*     const inputLength: number = latexInput.length;
    let j: number;

    for (let i = 0, j = 0; i < inputLength; i++, j++) {
      latexInput = [latexInput.slice(0, j), '^', latexInput.slice(j)].join('');
      j++;
    } */

    console.log('OUT: ', latexInput);

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

import { Injectable } from '@angular/core';
import * as nerdamer from 'nerdamer/all';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  public convertLatex(latexInput: string): string {
    console.log('IN__CON_SERV: ', latexInput);
    latexInput = this.convertFraction(latexInput);

    latexInput = this.cleanLatex(latexInput);
    latexInput = this.fractionConverter(latexInput);

    console.log('BEVORE_NERDAMER__CON_SERV: ', latexInput);

    latexInput = this.simplifyLatex(latexInput);

    console.log('OUT__CON_SERV: ', latexInput);

    return latexInput;
  }

  private convertFraction(latexInput: string): string {
    return latexInput;
  }

  private simplifyLatex(latexInput: string): string {
    return nerdamer(`simplify(${latexInput})`).toString();
  }

  private cleanLatex(latexInput: string): string {
    while (latexInput.indexOf('\\frac') >= 0) {
      latexInput = latexInput.replace('\\frac', 'frac');
    }
    latexInput = latexInput.replace(/{/g, '(');
    latexInput = latexInput.replace(/}/g, ')');
    latexInput = latexInput.replace(/cdot/g, '*');
    return latexInput;
  }

  private fractionConverter(str: string): string {
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
  }
}

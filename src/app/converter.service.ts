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

    latexInput = this.derivativeConverter(latexInput);

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
    while (latexInput.indexOf('\\f') >= 0) {
      latexInput = latexInput.replace('\\frac', 'frac');
    }
    latexInput = latexInput.replace(/{/g, '(');
    latexInput = latexInput.replace(/}/g, ')');
    latexInput = latexInput.replace(/\\cdot/g, '*');
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

  private derivativeConverter(str: string): string {
    console.log('___IN: ', str);
    let brackedCount = 0;
    let start: number = str.indexOf('\\deriOne') + 8;

    for (let i = start; i < str.length; i++) {
      if (str.charAt(i) == '(') {
        brackedCount++;
      } else if (str.charAt(i) == ')') {
        brackedCount--;
      }
      if (brackedCount == 0) {
        console.log(str.substring(start));
        if (str.substring(start).charAt(0) === '(') {
          if (str.substring(start + 1, i).indexOf('\\deriOne') >= 0) {
            console.log('CHILD: ', str.substring(start + 1, i));
            str =
              str.substring(0, start) +
              //   nerdamer('diff(x^2,x)').text('fractions')     -----------------------------------------------------
              nerdamer(
                `diff(${this.derivativeConverter(
                  str.substring(start + 1, i)
                )},x)`
              ).text('fractions') +
              /* math
                .derivative(
                  this.derivativeConverter(str.substring(start + 1, i)),
                  'x',
                  {
                    simplify: true,
                  }
                )
                .toString()  */
              //--------------------------------------------------------------------------------

              str.substring(i + 1, str.length);
          } else {
            str =
              str.substring(0, start) +
              //   nerdamer('diff(x^2,x)').text('fractions')     -----------------------------------------------------
              nerdamer(`diff(${str.substring(start + 1, i)},x)`).text(
                'fractions'
              ) +
              /* math
                .derivative(str.substring(start + 1, i), 'x', {
                  simplify: true,
                })
                .toString() */
              //--------------------------------------------------------------------------------------------

              str.substring(i + 1, str.length);
          }
        }

        //       console.log('Substring: ', str.substring(start, str.charAt(i)));

        str = str.replace('deriOne', ' ');
        break;
      }
    }
    console.log('___OUT: ', str);

    return str;

    /* let alreadyCalcIndex = 0;

    while (str.indexOf('deriOne') >= alreadyCalcIndex ) {

        
      let brackedCount = 0;
      let start: number = str.indexOf('deriOne') + 7;
      for (let i = start; i < str.length; i++) {
        if (str.charAt(i) == '(') {
          brackedCount++;
        } else if (str.charAt(i) == ')') {
          brackedCount--;
        }

        if (brackedCount == 0) {
          console.log(str.substring(start, brackedCount));
        }
        str = str.replace('frac', '');
        //         if (brackedCount == 0) {
        //  str = str.slice(0, i + 1) + '/' + str.slice(i + 1);
        //  str = str.replace('frac', '');
        //  break;
       // } 
        alreadyCalcIndex = start

      }
    }

    return str; */
  }
}

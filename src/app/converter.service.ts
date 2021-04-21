import { Injectable } from '@angular/core';
import * as nerdamer from 'nerdamer/all';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  public convertLatex(latexInput: string): string {
    //   console.log('IN__CON_SERV: ', latexInput);
    latexInput = this.convertFraction(latexInput);

    latexInput = this.cleanLatex(latexInput);
    latexInput = this.fractionConverter(latexInput);

    latexInput = this.derivativeConverter(latexInput);

    //   console.log('BEVORE_NERDAMER__CON_SERV: ', latexInput);

    latexInput = this.simplifyLatex(latexInput);

    //   console.log('OUT__CON_SERV: ', latexInput);

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
    console.log('IN: ', str);
    let brackedCount = 0;
    let start: number = str.indexOf('\\deriOne') + 8;
    let fieldCount = 0;

    for (let i = start; i < str.length; i++) {
      if (str.charAt(i) == '(') {
        brackedCount++;
      } else if (str.charAt(i) == ')') {
        brackedCount--;
      }

      if (brackedCount == 0) {
        fieldCount++;
      }

      if (fieldCount == 2) {
        if (str.substring(start).charAt(0) === '(') {
          if (str.substring(start + 1, i).indexOf('\\deriOne') >= 0) {
            str =
              str.substring(0, start) +
              nerdamer(
                `diff(${this.derivativeConverter(
                  str.substring(start + 1, i)
                )},x)`
              ).text('fractions') +
              str.substring(i + 1, str.length);
          } else {
            //------------------------------------------------------------------------
            let fieldInput_1 = '';
            let fieldInput_2 = '';

            console.log('AAA: ', str.substring(start, i + 1));
            let mySubString = str.substring(start, i + 1);

            brackedCount = 0;
            hello: for (let k = 0; k < mySubString.length; k++) {
              if (mySubString.charAt(k) == '(') {
                brackedCount++;
              } else if (mySubString.charAt(k) == ')') {
                brackedCount--;
              }

              if (brackedCount == 0) {
                console.log('BBB: ', mySubString.substring(1, k));
                fieldInput_1 = mySubString.substring(1, k);
                console.log('XXX: ', mySubString.substring(k + 1));

                brackedCount = 0;
                let secondSubString = mySubString.substring(k + 1);
                console.log('secondSubString: ', secondSubString);
                //   break;
                for (let j = 0; j < secondSubString.length; j++) {
                  if (secondSubString.charAt(j) == '(') {
                    brackedCount++;
                  } else if (secondSubString.charAt(j) == ')') {
                    brackedCount--;
                  }

                  // console.log('LOLLL: ', mySubString.substring(1, j));

                  if (brackedCount == 0) {
                    console.log('CCC: ', secondSubString.substring(1, j));
                    fieldInput_2 = secondSubString.substring(1, j);

                    break hello;
                  }
                }

                //----------------------------------------------
              }
            }

            console.log('fieldIput_1: ', fieldInput_1);
            console.log('fieldIput_2: ', fieldInput_2);

            str =
              str.substring(0, start) +
              nerdamer(`diff(${fieldInput_2},${fieldInput_1})`).text(
                'fractions'
              ) +
              str.substring(i + 1, str.length);

            /*             str =
              str.substring(0, start) +
              nerdamer(`diff(${str.substring(start + 1, i)},x)`).text(
                'fractions'
              ) +
              str.substring(i + 1, str.length); */
          }
        }

        str = str.replace('deriOne', ' ');
        break;
      }
    }
    console.log('OUT: ', str);

    return str;
  }
}

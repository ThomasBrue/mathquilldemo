import { Injectable } from '@angular/core';
import * as nerdamer from 'nerdamer/all';
import * as math from 'mathjs';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  public convertLatex(latexInput: string): string {
    latexInput = this.convertFraction(latexInput);

    latexInput = this.cleanLatex(latexInput);

    if (this.checkBracketClosure(latexInput)) {
      latexInput = this.fractionConverter(latexInput);

      latexInput = this.derivativeConverter(latexInput);
      latexInput = this.integralConverter(latexInput);

      latexInput = this.simplifyLatex(latexInput);
    } else {
      latexInput = '';
    }

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

  private checkBracketClosure(str: string): boolean {
    let brackedCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == '(') {
        brackedCount++;
      } else if (str.charAt(i) == ')') {
        brackedCount--;
      }
    }
    if (brackedCount !== 0) {
      return false;
    } else {
      return true;
    }
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
    while (str.indexOf('\\deriOne') >= 0) {
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
          if (str.substring(start + 1, i).indexOf('\\deriOne') >= 0) {
            let middle = this.derivativeConverter(str.substring(start + 4, i));

            str =
              str.substring(0, start + 4) +
              middle +
              str.substring(i, str.length);
          } else if (str.substring(start + 1, i).indexOf('\\intIndef') >= 0) {
            let middle = this.integralConverter(str.substring(start + 1, i));

            console.log('Left: ', str.substring(0, start + 1));
            console.log('Middle: ', middle);
            console.log('Right: ', str.substring(i, str.length));

            str =
              str.substring(0, start + 1) +
              middle +
              str.substring(i, str.length);

            console.log('INNER_OUT: ', str);
          } else {
            let fieldInput_1 = '';
            let fieldInput_2 = '';
            let mySubString = str.substring(start, i + 1);

            brackedCount = 0;
            breakpoint: for (let k = 0; k < mySubString.length; k++) {
              if (mySubString.charAt(k) == '(') {
                brackedCount++;
              } else if (mySubString.charAt(k) == ')') {
                brackedCount--;
              }

              if (brackedCount == 0) {
                fieldInput_1 = mySubString.substring(1, k);
                brackedCount = 0;
                let secondSubString = mySubString.substring(k + 1);
                for (let j = 0; j < secondSubString.length; j++) {
                  if (secondSubString.charAt(j) == '(') {
                    brackedCount++;
                  } else if (secondSubString.charAt(j) == ')') {
                    brackedCount--;
                  }
                  if (brackedCount == 0) {
                    fieldInput_2 = secondSubString.substring(1, j);
                    break breakpoint;
                  }
                }
              }
            }
            /* str =
              str.substring(0, start) +
              nerdamer(`diff(${fieldInput_2},${fieldInput_1})`).text(
                'fractions'
              ) +
              str.substring(i + 1, str.length); */

            str =
              str.substring(0, start) +
              math
                .derivative(fieldInput_2, fieldInput_1, {
                  simplify: true,
                })
                .toString() +
              str.substring(i + 1, str.length);

            str = str.replace('\\deriOne', ' ');
          }
          break;
        }
      }
    }
    return str;
  }
  //-----------------------------------------------------------------------------------------------

  private integralConverter(str: string): string {
    console.log('IN: ', str);

    while (str.indexOf('\\intIndef') >= 0) {
      let brackedCount = 0;
      // let start: number = str.indexOf('\\intIndef') + 9;
      let start: number = str.indexOf('\\intIndef') + 9;
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

        console.log(str.charAt(i), brackedCount, fieldCount);

        if (fieldCount == 2) {
          if (str.substring(start, i).indexOf('\\intIndef') >= 0) {
            let middle = this.integralConverter(str.substring(start + 1, i));

            console.log('Left: ', str.substring(0, start + 1));
            console.log('Middle: ', middle);
            console.log('Right: ', str.substring(i, str.length));

            str =
              str.substring(0, start + 1) +
              middle +
              str.substring(i, str.length);

            console.log('INNER_OUT: ', str);
          } else if (str.substring(start, i).indexOf('\\deriOne') >= 0) {
            let middle = this.derivativeConverter(str.substring(start + 4, i));

            str =
              str.substring(0, start + 4) +
              middle +
              str.substring(i, str.length);
          } else {
            let fieldInput_1 = '';
            let fieldInput_2 = '';
            console.log('Why: ', str);

            let mySubString = str.substring(start, i + 1);

            console.log('mySubString: ', mySubString);

            brackedCount = 0;
            breakpoint: for (let k = 0; k < mySubString.length; k++) {
              if (mySubString.charAt(k) == '(') {
                brackedCount++;
              } else if (mySubString.charAt(k) == ')') {
                brackedCount--;
              }

              if (brackedCount == 0) {
                fieldInput_1 = mySubString.substring(1, k);
                brackedCount = 0;
                let secondSubString = mySubString.substring(k + 1);
                console.log('secondSubString: ', secondSubString);
                for (let j = 0; j < secondSubString.length; j++) {
                  if (secondSubString.charAt(j) == '(') {
                    brackedCount++;
                  } else if (secondSubString.charAt(j) == ')') {
                    brackedCount--;
                  }
                  if (brackedCount == 0) {
                    fieldInput_2 = secondSubString.substring(1, j);
                    break breakpoint;
                  }
                }
              }
            }

            /*             console.log('fieldInput_1: ', fieldInput_1);
            console.log('fieldInput_2: ', fieldInput_2);

            console.log('111: ', str.substring(0, start + 5));
            console.log(
              '222: ',
              nerdamer(`integrate(${fieldInput_1},${fieldInput_2})`).text(
                'fractions'
              )
            );
            console.log('333: ', str.substring(i + 1, str.length)); */

            str =
              str.substring(0, start) +
              nerdamer(`integrate(${fieldInput_1},${fieldInput_2})`).text(
                'fractions'
              ) +
              str.substring(i + 1, str.length);
            str = str.replace('\\intIndef', ' ');
            console.log('vitalOutput: ', str);

            //   console.log(nerdamer('integrate(cos(x),x)').text('fractions'));
          }
          break;
        }
      }
      //-------------to be deleted ... just for dev purpose
      //   str = str.replace('\\intIndef', ' ');
    }

    console.log('OUT: ', str);
    console.log('------------------------------- ');

    return str;
  }
}

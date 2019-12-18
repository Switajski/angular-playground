import { Pipe, PipeTransform } from '@angular/core';

const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

@Pipe({ name: 'romanize' })
export default class ExponentialStrengthPipe implements PipeTransform {
    transform(num: number): string {
        let roman = '';
        let i;
        // tslint:disable-next-line
        for (i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    }
}
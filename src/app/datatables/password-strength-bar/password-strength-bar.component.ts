import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-passoword-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.scss'],
})
export class PassowordStrengthBarComponent implements OnChanges {
  @Input() passwordToCheck!: string;
  @Input() barLabel!: string;
  
  bars: any = {
    bar0: '',
    bar1: '',
    bar2: '',
    bar3: '',
    bar4: '',
  }

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  private static measureStrength(pass: string) {
    let score = 0;
    // award every unique letter until 5 repetitions
    let letters: any = {};
    for (let i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }
    // bonus points for mixing it up
    let variations: any = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    let variationCount = 0;
    for (let check in variations) {
      variationCount += variations[check] ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return Math.trunc(score);
  }

  private getColor(score: number) {
    let idx = 0;
    if (score > 90) {
      idx = 4;
    } else if (score > 70) {
      idx = 3;
    } else if (score >= 40) {
      idx = 2;
    } else if (score >= 20) {
      idx = 1;
    }
    return {
      idx: idx + 1,
      col: this.colors[idx],
    };
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    var password = changes['passwordToCheck'].currentValue;
    this.setBarColors(5, '#DDD');
    if (password) {
      let c = this.getColor(PassowordStrengthBarComponent.measureStrength(password));
      this.setBarColors(c.idx, c.col);
    }
  }
  private setBarColors(count: number, col: any) {
    for (let _n = 0; _n < count; _n++) {
      this.bars['bar' + _n] = col;
    }
  }
}

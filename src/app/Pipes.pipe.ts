import { Pipe, PipeTransform } from '@angular/core';
import { user } from './data';
@Pipe({
  name: 'declinationWord'
})
export class DeclinationWordPipe implements PipeTransform {

  transform(number: any, words: string[]): string {
      return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
  }

}
@Pipe({
  name: 'exponentialStrength'
})
export class exponentialStrengthPipe implements PipeTransform {

  transform(value:number, exponent: number): number {
    return Math.pow(value, exponent);
  }

}
@Pipe({
  name: 'younger'
})
export class youngerPipe implements PipeTransform {

  transform(value:user[],): user[] {
    return value.filter(user=>{ return user.age < 30})
  }

}
@Pipe({
  name: 'dirtyYounger',
  pure: false,
})
export class dirtyYoungerPipe extends youngerPipe {}

import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: HttpClient) { }

  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }
}
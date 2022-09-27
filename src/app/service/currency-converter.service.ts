import { Injectable } from '@angular/core';
import {interval, Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, retryWhen} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  apiUrl = 'https://api.apilayer.com/exchangerates_data/';

  constructor(private httpClient: HttpClient) { }

  static addAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      apikey: '9h0i5uvja3GjHdD0RU6mc09WRPaX3dTH'
    });
  }

  getConverter(to: string, from: string, amount: number): Observable<any> {
    const headers = CurrencyConverterService.addAuthorizationHeader();
    const url = this.apiUrl + `convert?to=${to}&from=${from}&amount=${amount}`;
    return this.httpClient.get(url, {headers})
      .pipe(retryWhen(_ => {
        return interval(5000).pipe(
          flatMap(count => count === 2 ? throwError('Request time out') : of(count))
        );
      }))
      .pipe(
        map((report: any) => {
          return report;
        }),
        catchError((err: Error) => {
            return throwError(err);
          }
        ));
  }

  getSymbols(): Observable<any> {
    const headers = CurrencyConverterService.addAuthorizationHeader();
    const url = this.apiUrl + `symbols`;
    return this.httpClient.get(url, {headers})
      .pipe(retryWhen(_ => {
        return interval(5000).pipe(
          flatMap(count => count === 2 ? throwError('Request time out') : of(count))
        );
      }))
      .pipe(
        map((report: any) => {
          return report;
        }),
        catchError((err: Error) => {
            return throwError(err);
          }
        ));
  }
}

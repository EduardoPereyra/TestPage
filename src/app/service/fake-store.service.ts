import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, Observable, of, throwError} from 'rxjs';
import {catchError, map, retryWhen} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  apiUrl = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    const url = this.apiUrl + `/products`;
    return this.httpClient.get(url)
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

  getAllCategories(): Observable<any> {
    const url = this.apiUrl + `/products/categories`;
    return this.httpClient.get(url)
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

import { Injectable } from '@angular/core';
import {interval, Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, retryWhen} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrl = 'https://opentdb.com/api.php?amount=';

  constructor(private httpClient: HttpClient) { }

  getQuizQuestions(amount: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + amount + '&encode=base64')
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

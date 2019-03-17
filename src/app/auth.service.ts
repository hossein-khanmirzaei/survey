import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ISurveyData } from './survey-answer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://109.230.93.18/survey-api/api/';

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post(this.baseUrl + '/index.php', { 'action': 'login', 'username': 'admin', 'password': 'admin' }).subscribe(
      (response) => {
        localStorage.setItem('access_token', response['JWT']);
      },
      (error: HttpErrorResponse) => {
        console.log({ 'status': error.statusText, 'message': error.message });
      }
    )
  }

  add(answer: ISurveyData, tableName: string) {
    const body = JSON.stringify(answer);
    return this.http.post(this.baseUrl + 'index.php/add/' + tableName, body)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(
        (response) => { console.log(response) },
        (error: HttpErrorResponse) => {
          console.log({ 'status': error.statusText, 'message': error.message });
        }
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
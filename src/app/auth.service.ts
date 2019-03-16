import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ISurveyData } from './survey-answer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost/survey-api/api/';

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

  add(answer: ISurveyData) {
    const body = JSON.stringify(answer);
    return this.http.post(this.baseUrl + 'index.php/add/direct_comment', body).subscribe(
      (response) => {
        console.log("OK!");
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log({ 'status': error.statusText, 'message': error.message });
      }
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
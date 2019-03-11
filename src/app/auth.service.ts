import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost/survey-api/api/login.php';  // URL to web api

  constructor(private http: HttpClient) { }

  private loginObject: object = { 'action': 'login', 'usename': 'admin', 'password': 'admin' };
  login() {
    return this.http.post(this.baseUrl, this.loginObject, httpOptions).pipe(
      //tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError('addHero'))
    );
    //return this.httpClient.post('/api/login', { 'action': 'login', 'username': 'admin', 'password': 'admin' })
    // this is just the HTTP call, 
    // we still need to handle the reception of the token
    //  .shareReplay();
    // let headers: HttpHeaders = new HttpHeaders();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // //headers.append('cache-control', 'no-cache');
    // //headers.append('Postman-Token', '96e17513-5081-4d48-b818-6c410e6e97d2');
    // return this.httpClient.post<{ access_token: string }>('http://localhost/survey-api/api/index.php', { 'action': 'login', 'username': 'admin', 'password': 'admin' }, { headers })
    //   .subscribe((r) => {
    //     console.log(r);
    //   });
    // // .pipe(
    // //   tap(
    // //     res => {
    // //       localStorage.setItem('access_token', res.access_token);
    // //       console.log(res.access_token);
    // //     }
    // //   )
    // // )
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
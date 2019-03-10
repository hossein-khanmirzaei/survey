import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {

    let options = new HttpHeaders({
      'action': 'login',
      'username': 'admin',
      'password': 'admin'
    });

    return this.http.post('http://192.168.50.101/survey/api/', options)
      .subscribe(
        response => { console.log(response) }
      );
  }
}
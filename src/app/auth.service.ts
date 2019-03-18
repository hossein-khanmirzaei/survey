import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://109.230.93.18/survey-api/api/';
  jwtToken: string;

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post(this.baseUrl + 'index.php', { 'action': 'login', 'username': 'NormalUser', 'password': 'NormalPassword' })
  }
}
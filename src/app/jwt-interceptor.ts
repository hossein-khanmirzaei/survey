import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const idToken = this.auth.jwtToken;// localStorage.getItem('access_token');
        if (idToken) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',               
                    'X-Authorization': `Bearer ${idToken}`
                }
            });
        }

        return next.handle(request);
    }
}
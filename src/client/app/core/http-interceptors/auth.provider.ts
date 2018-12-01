import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { JwtHelper } from '../helpers/jwt.helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: JwtHelper.addJwt() });
    return next.handle(modified);
  }
}

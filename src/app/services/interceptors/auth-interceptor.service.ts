import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { Session } from '@app/core/models/session.model';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private ss:StorageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let session:Session = this.ss.getCurrentSession();

    let request = req;

    //si no hemos iniciado session, aun asi enviamos la peticion,
    //si el api requiere token, la rechazara
    if(session == null ) {
      return next.handle(request);
    }

    const token: string = session.token;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Token ${ token }`
        }
      });
    }

    return next.handle(request);
  }

}

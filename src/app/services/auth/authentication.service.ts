import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '@app/core/models/session.model';
import { Observable } from 'rxjs';
import { LoginObject } from '@app/shared/login/login-object.model';
import { environment } from '@src/environments/environment';

@Injectable({
    providedIn:'root'
  }
)
export class AuthenticationService{

  private base_url:string;
  constructor(
    private httpclient:HttpClient
  ){
    this.base_url = environment.url;
  }

  login(loginObj:LoginObject):Observable<Object>{
    let fm = new FormData();

    fm.append("username",loginObj.username);
    fm.append("password",loginObj.password);

    return this.httpclient.post(this.base_url + 'account/login/', fm);
  }
}

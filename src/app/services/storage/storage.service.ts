import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from '@app/core/models/session.model';
import {User} from "@app/core/models/user.model";
import { AuthenticationService } from "../auth/authentication.service";
import { Subject } from "rxjs";
@Injectable({
  providedIn:"root"
})
export class StorageService {
  userSubject=new Subject();
  private localStorageService;
  private currentSession : Session;


  constructor(
    private router: Router,
    private authService:AuthenticationService
    ) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();

  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));

    this.userSubject.next();

  }

  loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr): null!;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null!;
  }



  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null!;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null!;
  };

  logout(): void{
    this.removeCurrentSession();

    this.router.navigate(['/auth/login']);
  }

}

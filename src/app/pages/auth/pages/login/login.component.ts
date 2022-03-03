import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/auth/authentication.service';
import { StorageService } from '@app/services/storage/storage.service';
import { LoginObject } from '@app/shared/login/login-object.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService,
    private storageService:StorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  loginUsuario(form:NgForm):void{

    console.log(form);

    if(form.valid){
      this.authenticationService.login(new LoginObject(form.form.value)).subscribe(
        data => this.correctLogin(data),
        error => console.log(error)
      )

    }
  }


  correctLogin(data:any){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['']);
  }

}

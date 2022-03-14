import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from '@app/core/models/session.model';
import { User } from '@app/core/models/user.model';
import { AuthenticationService } from '@app/services/auth/authentication.service';
import { StorageService } from '@app/services/storage/storage.service';
import { LoginObject } from '@app/shared/login/login-object.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService,
    private storageService:StorageService,
    private router:Router,
    private authService:AuthenticationService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    let session:Session = this.storageService.getCurrentSession();

    if(session != null){
      this.router.navigate(['/home']);
    }
  }

  loginUsuario(form:NgForm):void{

    console.log(form);

    if(form.valid){
      this.authenticationService.login(new LoginObject(form.form.value)).subscribe(
        data => this.correctLogin(data),
        error => {
          console.log(error);
          this.toastrService.error("Error al iniciar sesión. Valide que el usuario y contraseña sean correctos.");
        }
      )

    }
  }


  correctLogin(data:any){
    let session:Session=data;
    this.storageService.setCurrentSession(session);

    this.authService.getDataUser(session.token).subscribe(
      data =>{

        session.user = data.data;

        this.storageService.setCurrentSession(session);
        this.router.navigate(['/home']);

      },
      error=>{
        console.log(error);
      }
    );




  }


}

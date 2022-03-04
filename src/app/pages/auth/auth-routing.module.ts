import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from '@app/guards/authorizated.guard';

const routes: Routes = [{
  path:'login',
  loadChildren:()=>import('./pages/login/login.module').then( m=> m.LoginModule)
},
{
  path:'',
  pathMatch:'full',
  redirectTo:'login'
},
{
  path:'home',
  loadChildren:()=>import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate:[AuthorizatedGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

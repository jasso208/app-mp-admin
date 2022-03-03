import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizatedGuard} from '@app/guards/authorizated.guard';

const routes:Routes=[
  {
    path:'ventas-dia',
    loadChildren:()=>import('./pages/ventas-dia/ventas-dia.module').then(m=>m.VentasDiaModule),
    canActivate:[AuthorizatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }

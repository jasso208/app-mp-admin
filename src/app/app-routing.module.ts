import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  children:[
    {
      path:'',
      loadChildren:()=>import('./pages/auth/auth.module').then(m=> m.AuthModule)
    },
    {
      path:'ventas',
      loadChildren:()=>import('./pages/ventas/ventas.module').then(m => m.VentasModule)
    },
    {
      path:'inventory',
      loadChildren:()=>import('./pages/inventory/inventory.module').then(m=>m.InventoryModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path:'maintenance',
  loadChildren:()=>import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

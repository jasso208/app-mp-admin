import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from '@app/guards/authorizated.guard';

const routes: Routes = [
  {
    path:'provider',
    loadChildren:()=>import('./provider/provider.module').then(m=> m.ProviderModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }

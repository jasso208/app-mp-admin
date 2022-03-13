import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderModule } from './provider/provider.module';

const routes: Routes = [{
  path:'search',
  loadChildren:()=>import('./search-provider/search-provider.module').then(m =>m.SearchProviderModule)

}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ProviderModule
  ],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

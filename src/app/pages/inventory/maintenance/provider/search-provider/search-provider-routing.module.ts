import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from '@app/guards/authorizated.guard';
import { SearchProviderComponent } from './search-provider.component';

const routes: Routes = [{
  path:'',
  component:SearchProviderComponent,
  canActivate:[AuthorizatedGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProviderRoutingModule { }

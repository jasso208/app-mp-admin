import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProviderRoutingModule } from './search-provider-routing.module';
import { SearchProviderComponent } from './search-provider.component';


@NgModule({
  declarations: [
    SearchProviderComponent
  ],
  imports: [
    CommonModule,
    SearchProviderRoutingModule
  ]
})
export class SearchProviderModule { }

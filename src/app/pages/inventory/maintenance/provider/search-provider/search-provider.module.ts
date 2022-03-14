import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProviderComponent } from './search-provider.component';
import { SearchProviderRoutingModule } from './search-provider-routing.module';
import { ProviderModule } from '../provider/provider.module';
@NgModule({
  declarations: [
    SearchProviderComponent,
  ],
  imports: [
    CommonModule,
    SearchProviderRoutingModule,
    ProviderModule

  ]
})
export class SearchProviderModule { }

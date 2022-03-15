import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProviderComponent } from './search-provider.component';
import { SearchProviderRoutingModule } from './search-provider-routing.module';
import { ProviderModule } from '../provider/provider.module';
import { LoaderModule } from '@app/components/loader/loader.module';
import { SpinnerModule } from '@app/components/spinner/spinner.module';
@NgModule({
  declarations: [
    SearchProviderComponent,
  ],
  imports: [
    CommonModule,
    SearchProviderRoutingModule,
    ProviderModule,
    SpinnerModule
  ]
})
export class SearchProviderModule { }

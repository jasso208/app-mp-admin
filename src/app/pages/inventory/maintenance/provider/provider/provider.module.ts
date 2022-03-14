import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProviderComponent
  ],
  exports:[
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ProviderModule { }

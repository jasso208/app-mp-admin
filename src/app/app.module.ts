import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { MenuListComponent } from './components/menu-list/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

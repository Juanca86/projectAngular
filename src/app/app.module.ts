
import { HomeModule } from './elements/pages/home/home.module';
import { HeaderModule } from './elements/core/header/header.module';
import { FooterModule } from './elements/core/footer/footer.module';
// import { ElementsModule } from './elements/elements.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

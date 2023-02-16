import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ManagementComponent } from './pages/management/management.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }

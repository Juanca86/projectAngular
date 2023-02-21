import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopeameService } from 'src/app/service/shopeame.service';




@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }

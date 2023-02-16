import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ],
  exports: [
    ManagementComponent
  ]
})
export class ManagementModule { }

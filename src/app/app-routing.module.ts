import { ManagementComponent } from './elements/pages/management/management.component';
import { ProductsComponent } from './elements/pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './elements/pages/home/home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'management', component: ManagementComponent },
  {
    path: 'home',
    loadChildren: () => import('./elements/pages/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: '**',
  //   component: HomeComponent,
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

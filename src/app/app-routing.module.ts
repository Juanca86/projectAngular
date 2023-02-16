import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './elements/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./elements/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./elements/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./elements/pages/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: '**',
    component: HomeComponent,
  },
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

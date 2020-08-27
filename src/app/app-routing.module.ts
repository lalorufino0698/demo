import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetaitlsProductsComponent } from './products/detaitls-products/detaitls-products.component';
import { noUndefined } from '@angular/compiler/src/util';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'', component: HomePageComponent },
  {path:'products', component: ProductListComponent},
  {path:'product/:id', component: DetaitlsProductsComponent},
  {path:'**', component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

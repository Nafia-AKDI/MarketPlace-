import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { MarquesComponent } from './marques/marques.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
    children:[ 
      {path:'products',component:ProductsComponent},
      {path:'',component:ProductsComponent},
      {path:'categories',component:CategoriesComponent},
      {path:'marques',component:MarquesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

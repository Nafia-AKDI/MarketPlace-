import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MarquesComponent } from './marques/marques.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AsidebarComponent,
    CategoriesComponent,
    MarquesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

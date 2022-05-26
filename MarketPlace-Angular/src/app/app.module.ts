import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';
//import { DproductsComponent } from './default/dproducts/dproducts.component';
import { DefaultRoutingModule } from './default/default-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import {  FormsModule } from '@angular/forms';

const appRoutes: Routes = [
{path:'',loadChildren:()=>import('./default/default.module').then(m=>m.DefaultModule)},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
 //{ path: 'test', component: TestComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
   
    //DefaultComponent ,
   // DproductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    DefaultRoutingModule,
    AdminRoutingModule,
    FormsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

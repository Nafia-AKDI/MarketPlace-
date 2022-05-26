import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoutactusComponent } from './coutactus/coutactus.component';
import { DefaultComponent } from './default.component';
import { DloginComponent } from './dlogin/dlogin.component';
import { DproductsComponent } from './dproducts/dproducts.component';
import { DregistrationComponent } from './dregistration/dregistration.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:'',component:DefaultComponent,
    children:[
      {path:'products',component:DproductsComponent},
      {path:'',component:DproductsComponent},
      {path:'panier',component:PanierComponent},
      {path:'about',component:AboutComponent},
      {path:'coutactus',component:CoutactusComponent},
      {path:'login',component:DloginComponent},
      {path:'register',component:DregistrationComponent},
      { path: ':data',component:DproductsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }

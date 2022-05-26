import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DproductsComponent } from '../default/dproducts/dproducts.component';
import { DtopbarComponent } from '../default/dtopbar/dtopbar.component';
import { PanierComponent } from '../default/panier/panier.component';
import { userModel } from '../models/user.model';
declare var toastr: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
 public user!:userModel;
 public isAuth:boolean=false;
 private baseUrl="http://localhost:8000/api/";
  constructor(private http:HttpClient, private route:Router) { }
  public login(form:any) {
    var message:any;
    return this.http.post(this.baseUrl+"login",form).subscribe(res=>{
     message=res;
     this.user=message.us;
     //this.isAuth=true;
    if(message.message==='ok' && this.user.role_id===2) {
      this.isAuth=true;
      DtopbarComponent.nom=this.user.name;
      PanierComponent.iduser=this.user.id;
      DproductsComponent.iduser=this.user.id;
      DtopbarComponent.isAuth=true;
      this.route.navigate(['/']);
      //alert(this.isAuth);
    }
      
    else if( message.message==='ok' && this.user.role_id===1) { 
      this.isAuth=true;
      DtopbarComponent.isAuth=true;
      DproductsComponent.iduser=this.user.id;
      DtopbarComponent.nom=this.user.name;
      PanierComponent.iduser=this.user.id;
      //alert(this.isAuth);
      this.route.navigate(['/admin/products']);}
    else if(message.message==1){ 
      this.route.navigate(['/login'])
      alert ('email incorrect');
    }
    else{
      this.route.navigate(['/login'])
      alert('password incorrect');
    }
    })
  }
  public register(form:any) {
    this.isAuth=true;
    DtopbarComponent.isAuth=true;
    DproductsComponent.iduser=this.user.id;
    PanierComponent.iduser=this.user.id;
    var message:any;
    return this.http.post(this.baseUrl+"register",form).subscribe
    (res=>{
    message=res;
    this.user=message.us;
    DtopbarComponent.nom=this.user.name;
    this.route.navigate(['/'])

    });
  }
  public logout() {
    this.isAuth=false; 
    DtopbarComponent.isAuth=false;
    return this.http.post(this.baseUrl+"logout",null);
    
  }
}

/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  AllProducts= new BehaviorSubject<productModel[]>(null);
  private baseUrl="http://localhost:8000/api/";
  constructor(private http:HttpClient) { 
    this.getFormDb("");
  }
  public addToCart(id:any) {
    return this.http.post(this.baseUrl+"panier?id="+id,null);
   
  }
  public delete(id:any) {
    return this.http.post(this.baseUrl+"destroy?id="+id,null);
    alert("success")
  }
  public  getFormDb(keys:any) {
    return this.http.post(this.baseUrl+"showpanier?keys="+keys,null).subscribe(res=>{
      var r:any=res;
      this.AllProducts.next(r.products);
     
     
    });
  }
}

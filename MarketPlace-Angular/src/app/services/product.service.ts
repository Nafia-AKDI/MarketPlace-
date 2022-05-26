import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  AllProducts= new BehaviorSubject<productModel[]>(null);

  private baseUrl="http://localhost:8000/api/";
  constructor(private http:HttpClient) { 
    this.getFormDb("");
  }
  public add(form:any) {
    return this.http.post(this.baseUrl+"add",form);
  }
  public delete(id:any) {
    return this.http.post(this.baseUrl+"delete?id="+id,null);
  }
  public update(form:any) {
    return this.http.post(this.baseUrl+"update",form);
  }
  public getFormDb(keys:any) {
    return this.http.post(this.baseUrl+"show?keys="+keys,null).subscribe(res=>{
      var r:any=res;
      this.AllProducts.next(r.products);
    });
  }
}

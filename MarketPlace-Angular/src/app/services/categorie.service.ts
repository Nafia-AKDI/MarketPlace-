import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { categorieModel } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  AllCategories= new BehaviorSubject<categorieModel[]>(null);
  private baseUrl="http://localhost:8000/api/";
  constructor(private http:HttpClient) { 
   this.getFormDb("");
    
  }
  public add(form:any) {
    return this.http.post(this.baseUrl+"addCategorie",form);
  }
  public delete(id:any) {
    return this.http.post(this.baseUrl+"deleteCategorie?id="+id,null);
  }
  public update(form:any) {
    return this.http.post(this.baseUrl+"updateCategorie",form);
  }
  public getFormDb(keys:any) {
    return this.http.post(this.baseUrl+"showCategorie?keys="+keys,null).subscribe(res=>{
      var r:any=res;
      this.AllCategories.next(r.categories); 
      
    });
  }
}
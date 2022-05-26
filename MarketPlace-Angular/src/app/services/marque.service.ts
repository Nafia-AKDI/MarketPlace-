import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { marqueModel } from '../models/marque.model';
@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  AllMarques= new BehaviorSubject<marqueModel[]>(null);
  private baseUrl="http://localhost:8000/api/";
  constructor(private http:HttpClient) {
    this.getFormDb("");
   }
   public add(form:any) {
    return this.http.post(this.baseUrl+"addMarque",form);
  }
  public delete(id:any) {
    return this.http.post(this.baseUrl+"deleteMarque?id="+id,null);
  }
  public update(form:any) {
    return this.http.post(this.baseUrl+"updateMarque",form);
  }
  public getFormDb(keys:any) {
    return this.http.post(this.baseUrl+"showMarque?keys="+keys,null).subscribe(res=>{
      var r:any=res;
      this.AllMarques.next(r.marques); 
    });
  }
}

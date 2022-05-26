/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/product.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products:productModel[]=[];
  static iduser:number;
  constructor(private pannSer:PanierService) { }
  
  ngOnInit(): void {
   
    this.pannSer.AllProducts.subscribe(res=>{
      this.products=res;
     console.log(this.products);

    })
this.reloadJSFile();
this. reloadcssFile();
  }
  reloadJSFile() {
    $.ajax({
      url: 'assets/js.js',
      dataType: 'script',
    });}
    reloadcssFile() {
      $.ajax({
        url:'assets/owl.carousel.min.js',
        dataType: 'script',
      });}
    
  delete(id:any){
    this.pannSer.delete(id).subscribe
    (res=>{
      
      this.pannSer.getFormDb("");
       alert("delete with success");
    })

  }

}

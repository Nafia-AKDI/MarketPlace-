import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { categorieModel } from 'src/app/models/categorie.model';
import { marqueModel } from 'src/app/models/marque.model';
import { productModel } from 'src/app/models/product.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { MarqueService } from 'src/app/services/marque.service';
import { PanierService } from 'src/app/services/panier.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-dproducts',
  templateUrl: './dproducts.component.html',
  styleUrls: ['./dproducts.component.css']
})
export class DproductsComponent implements OnInit {
 static products:Array<productModel>;
 static  marques:Array<marqueModel>;
 static categories:Array<categorieModel> ;
 
  cat:string="";
  static shirts:boolean=true;
  static smartphones:boolean=true;
  static watches:boolean=true;
  static shoes:boolean=true;
  static iduser:number;
  //static womens:boolean=true;
  constructor(private router: Router, private route: ActivatedRoute,private proSer:ProductService,private catSer:CategorieService,private marSer:MarqueService,private panSer:PanierService) { 
  /*  this.route.params.subscribe(params => {
      this.cat = params['categorie'];
    });*/
    
   
  }

  ngOnInit(): void {

    console.log('jjjjjjjjjjjjjjjj');
    this.catSer.AllCategories.subscribe(res1=>{
      DproductsComponent.categories=res1;
     
      console.log(DproductsComponent.categories);
 
    })
  this.proSer.AllProducts.subscribe(res=>{
    DproductsComponent.products=res;
    console.log(DproductsComponent.products);
  })
  this.marSer.AllMarques.subscribe(res2=>{
    DproductsComponent.marques=res2;
    
    console.log(DproductsComponent.marques);
  })
  DproductsComponent.shoes=true;
  DproductsComponent.shirts=true;
  DproductsComponent.smartphones=true;
  DproductsComponent.watches=true;

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
  

static fnt(att:string): void{
  //alert(att);
 // console.log( this.categories);
 //DproductsComponent.categories=[{"id":1,"nom":"axraf"}];
 console.log(DproductsComponent.categories);
  if(att==='shirts') DproductsComponent.shirts=true;
  else DproductsComponent.shirts=false;
  if(att==='smartphones') DproductsComponent.smartphones=true;
  else DproductsComponent.smartphones=false;
  if(att==='watches') DproductsComponent.watches=true;
  else DproductsComponent.watches=false;
  if(att==='shoes') DproductsComponent.shoes=true;
  else DproductsComponent.shoes=false;
 //alert(att);
}
add(id:any){
  var message:any;
  
  const fd=new FormData();


  this.panSer.addToCart(id).subscribe
  (res=>{
    message=res;
    console.log(message.message);
    alert("add with succes");
    this.panSer.getFormDb("");
    
  })

}
get shirts()  {return DproductsComponent.shirts; }
get smartphones(){return DproductsComponent.smartphones; }
get watches(){return DproductsComponent.watches; }
get shoes(){return DproductsComponent.shoes; }
get products():productModel[]{return DproductsComponent.products; }
get categories():categorieModel[]{return DproductsComponent.categories; }
get marques():marqueModel[]{return DproductsComponent.marques; }
}

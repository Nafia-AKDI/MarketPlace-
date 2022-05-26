import { Component, OnInit } from '@angular/core';
import { categorieModel } from 'src/app/models/categorie.model';
import { marqueModel } from 'src/app/models/marque.model';
import { productModel } from 'src/app/models/product.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { MarqueService } from 'src/app/services/marque.service';
import { ProductService } from 'src/app/services/product.service';
declare var $:any;
declare var toastr:any;
declare var Toast:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:productModel[]=[] ;
  categories:categorieModel[]=[] ;
  marques:marqueModel[]=[] ;
  //for image 
  SelectedImage:any=null;
  product=new productModel;
  tempId="";
  constructor(private proSer:ProductService,private catSer:CategorieService,private marSer:MarqueService) { }

  ngOnInit(): void {
    this.proSer.AllProducts.subscribe(res=>{
      this.products=res;
      console.log(this.products);
    })
    this.catSer.AllCategories.subscribe(res1=>{
      this.categories=res1;
      console.log(this.marques);
    })
    this.marSer.AllMarques.subscribe(res2=>{
      this.marques=res2;
      console.log(this.categories);
    })
  }
  search(input:any){
    this.proSer.getFormDb(input);
  }
  onSelect(event:any){
    var tmppath =URL.createObjectURL(event.target.files[0]);
    $("#AddEmpImage").fadeIn("fast").attr('src',tmppath);
    this.SelectedImage=<File>event.target.files[0];
  }
  add(){
    var message:any;
    
    const fd=new FormData();
    fd.append('image',this.SelectedImage);
    fd.append('nom',$('#nom').val());
    fd.append('categorie',$('#categorie').val());
    fd.append('marque',$('#marque').val());
    fd.append('prix',$('#prix').val());
    fd.append('quantite',$('#quantite').val());
    fd.append('description',$('#description').val());
    this.proSer.add(fd).subscribe
    (res=>{
      this.proSer.getFormDb("");
       alert("add with success");
    })
      this.SelectedImage=null;
  }
  SelectForUpdate(id:any){
    this.tempId=id;
    this.products.forEach(el=>{
      if(id==el.id){
        $("#unom").prop("value",el.nom)
        $("#oldcategorie").prop("value",el.categorie)
        $("#oldcategorie").html(el.categorie)
        $("#oldmarque").prop("value",el.marque)
        $("#oldmarque").html(el.marque)
        $("#uprix").prop("value",el.prix)
        $("#uquantite").prop("value",el.quantite)
        $("#udescription").prop("value",el.description)
        $("#UpdateImage").fadeIn("fast").attr('src',el.image);
      }
    }
    )
  }
  update(){
    var message:any;
    
    const fd=new FormData();
    fd.append('id',this.tempId);
    fd.append('nom',$('#unom').val());
    fd.append('categorie',$('#ucategorie').val());
    fd.append('marque',$('#umarque').val());
    fd.append('prix',$('#uprix').val());
    fd.append('quantite',$('#uquantite').val());
    fd.append('description',$('#udescription').val());
    this.proSer.update(fd).subscribe
    (res=>{
      this.proSer.getFormDb("");
       alert("Update with success");
    })
     
    this.SelectedImage=null;
  }
  selectForDelete(id:any){
    this.tempId=id;
  }
  deleteConform(){
    this.proSer.delete(this.tempId).subscribe
    (res=>{
      this.proSer.getFormDb("");
       alert("delete with success");
    })
  }
  SelectForShow(id:any){
    this.tempId=id;
    this.products.forEach(el=>{
      if(id==el.id){
        $("#snom").prop("value",el.nom)
        $("#scategorie").prop("value",el.categorie)
        $("#oldcategorie").html(el.categorie)
        $("#smarque").prop("value",el.marque)
        $("#oldmarque").html(el.marque)
        $("#sprix").prop("value",el.prix)
        $("#squantite").prop("value",el.quantite)
        $("#sdescription").prop("value",el.description)
        $("#ShowImage").fadeIn("fast").attr('src',el.image);
      }
    }
    )
  }
}

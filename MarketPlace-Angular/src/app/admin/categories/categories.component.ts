import { Component, OnInit } from '@angular/core';
import { categorieModel } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
declare var $:any;
declare var toastr:any;
declare var Toast:any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:categorieModel[]=[] ;
  categorie=new categorieModel;
  tempId="";
  constructor(private catSer:CategorieService) { }

  ngOnInit(): void {
    this.catSer.AllCategories.subscribe(res=>{
      this.categories=res;
      console.log(this.categories);
    })
  }
  search(input:any){
    this.catSer.getFormDb(input);
  }
  add(){
    var message:any;
    
    const fd=new FormData();
 
    fd.append('nom',$('#nomCategorie').val());
    this.catSer.add(fd).subscribe
    (res=>{
      this.catSer.getFormDb("");
       alert("add with success");
    })
  }
  SelectForUpdate(id:any){
    this.tempId=id;
    this.categories.forEach(el=>{
      if(id==el.id){
        $("#unomCategorie").prop("value",el.nom)
      }
    }
    )
  }
  update(){
    var message:any;
    const fd=new FormData();
    fd.append('id',this.tempId);
    fd.append('nom',$('#unomCategorie').val());
  this.catSer.update(fd).subscribe
    (res=>{
      this.catSer.getFormDb("");
       alert("Update with success");
    })
  }
  selectForDelete(id:any){
    this.tempId=id;
  }
  deleteConform(){
    this.catSer.delete(this.tempId).subscribe
    (res=>{
      this.catSer.getFormDb("");
       alert("delete with success");
    })
  }
  SelectForShow(id:any){
    this.tempId=id;
    this.categories.forEach(el=>{
      if(id==el.id){
        $("#snomCategorie").prop("value",el.nom)
      }
    })
  }

}

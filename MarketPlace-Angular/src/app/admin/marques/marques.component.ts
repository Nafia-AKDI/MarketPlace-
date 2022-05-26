import { Component, OnInit } from '@angular/core';
import { marqueModel } from 'src/app/models/marque.model';
import { MarqueService } from 'src/app/services/marque.service';
declare var $:any;
declare var toastr:any;
declare var Toast:any;
@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent implements OnInit {
  marques:marqueModel[]=[] ;
  marque=new marqueModel;
  tempId="";
  constructor(private marqSer:MarqueService) { }

  ngOnInit(): void {
    this.marqSer.AllMarques.subscribe(res=>{
      this.marques=res;
      console.log(this.marques);
    })
  }
  search(input:any){
    this.marqSer.getFormDb(input);
  }
  add(){
    var message:any;
    const fd=new FormData();
    fd.append('nom',$('#nomMarque').val());
    this.marqSer.add(fd).subscribe
    (res=>{
      this.marqSer.getFormDb("");
       alert("add with success");
    })
  }
  SelectForUpdate(id:any){
    this.tempId=id;
    this.marques.forEach(el=>{
      if(id==el.id){
        $("#unomMarque").prop("value",el.nom)
      }
    }
    )
  }
  update(){
    var message:any;
    const fd=new FormData();
    fd.append('id',this.tempId);
    fd.append('nom',$('#unomMarque').val());
  this.marqSer.update(fd).subscribe
    (res=>{
      this.marqSer.getFormDb("");
       alert("Update with success");
    })
  }
  selectForDelete(id:any){
    this.tempId=id;
  }
  deleteConform(){
    this.marqSer.delete(this.tempId).subscribe
    (res=>{
      this.marqSer.getFormDb("");
       alert("delete with success");
    })
  }
  SelectForShow(id:any){
    this.tempId=id;
    this.marques.forEach(el=>{
      if(id==el.id){
        $("#snomMarque").prop("value",el.nom)
      }
    })
  }

}

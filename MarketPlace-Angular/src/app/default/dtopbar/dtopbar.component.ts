import { Component, Input, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { MarqueService } from 'src/app/services/marque.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DproductsComponent } from '../dproducts/dproducts.component';

@Component({
  selector: 'app-dtopbar',
  templateUrl: './dtopbar.component.html',
  styleUrls: ['./dtopbar.component.css']
})
export class DtopbarComponent implements OnInit {
objet!:DproductsComponent;
static isAuth:boolean=false;
static nom:string;
static np:string="";
  constructor(private route:Router,private catSer:CategorieService,private marSer:MarqueService ,private useSer:UserService) {
    //alert(this.useSer.isAuth);
   }
  ngOnInit(): void {


}

  getByCat(input:any){
    this.catSer.getFormDb(input);
  }
  get isAuth():boolean{
    return DtopbarComponent.isAuth;
  }
  get nom():string{
    return DtopbarComponent.nom;
  }
  logout(){
    this.useSer.logout();
  }
  verifier(){
    if( DtopbarComponent.isAuth) this.route.navigate(['/panier'])
    else {
      alert("  vous n'etes pas authentifiez , vous devez s'authentifier");
      this.route.navigate(['/login']);
    }
  }
fc(att:string){
 // alert(att);
 DproductsComponent.fnt(att);
}
get np() {return DtopbarComponent.np; }
}

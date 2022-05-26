import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DtopbarComponent } from '../dtopbar/dtopbar.component';
declare var $:any;

@Component({
  selector: 'app-dregistration',
  templateUrl: './dregistration.component.html',
  styleUrls: ['./dregistration.component.css']
})
export class DregistrationComponent implements OnInit {
  [x: string]: any;
   public email!:string;
    public password!:string;
  public name!:string;
  public passwordconfirmation!:string;
  
  constructor(private userSer:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  register(){
    
   var toastr;
    if(this.passwordconfirmation!=this.password){
      alert( "Error");

    }else{
      var message:any;
 
    const fd=new FormData();
    fd.append('name',this.name);
    fd.append('email',this.email);
    fd.append('password',this.password);
    this.userSer.register(fd);
    }
    
   
  }

}

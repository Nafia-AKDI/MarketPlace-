import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $:any;
@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit {
  email!:string;
   password!:string;

  constructor(private userSer:UserService,private router:Router) { }
  ngOnInit(): void {
  }
  login(){
     var message:any;
   console.log(this.email);
   console.log(this.password);
    const fd=new FormData();

    fd.append('email',this.email);
    fd.append('password',this.password);
    this.userSer.login(fd)
  }
}

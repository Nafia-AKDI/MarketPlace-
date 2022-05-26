import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name:string="";
  constructor(private useSer:UserService) { }

  ngOnInit(): void {
   //var user:any=JSON.parse(String(localStorage.getItem('user')));
    this.name=this.useSer.user.name;
    
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {

  constructor(private router:Router,private useSer:UserService) { }

  ngOnInit(): void {
  }
  logout(){
   this.useSer.logout();
   this.router.navigate(['/']);
  }

}

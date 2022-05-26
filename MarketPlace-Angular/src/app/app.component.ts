import { Component } from '@angular/core';


declare var jquery:any;
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pan:string="2";
  show:boolean=true;
  title = 'MarketPlace';
}
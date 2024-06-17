import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template:`
  <div>
    <h4>{{pageTitle}}</h4>
    <nav>
    <ul class='nav'>
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
    <!-- {{'Title: ' + pageTitle }}
    {{2*20}}
    <h1 innerText={{pageTitle}}></h1> --> 
    <!-- <pm-products></pm-products> -->
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  pageTitle: string = "Store Management";
}
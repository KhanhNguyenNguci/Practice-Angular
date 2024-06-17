import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'pm-product-detail', //Selector property is only required if component will be nested in another component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'product detail';
  constructor() { }

  ngOnInit(): void {
  }

} 

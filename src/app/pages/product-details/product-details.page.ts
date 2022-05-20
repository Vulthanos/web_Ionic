import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private productoService: ProductsService) {

  }

  ngOnInit() {


  }





}


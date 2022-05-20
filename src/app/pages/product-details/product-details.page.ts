import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  productoHijo = this.activador.snapshot.params;
  constructor(private productoService: ProductsService, private activador: ActivatedRoute) {

  }

  ngOnInit() {
  console.log(this.productoHijo);

  }





}


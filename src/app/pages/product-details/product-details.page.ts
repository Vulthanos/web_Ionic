import {Component, Input, OnInit} from '@angular/core';

import {ProductsService} from '../../services/products.service';
import {Producto} from '../../interfaces/producto.interface';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {



  // eslint-disable-next-line @typescript-eslint/member-ordering
  product: Observable<Producto[]>;

  constructor(private productoService: ProductsService) {

  }

  ngOnInit() {

  }
}


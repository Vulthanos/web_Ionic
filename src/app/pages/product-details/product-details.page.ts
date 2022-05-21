import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  isFavorite = false;
  productoHijo = this.activador.snapshot.params;

  constructor(private productoService: ProductsService, private activador: ActivatedRoute, private app: AppComponent) {

  }

  ngOnInit() {
    console.log(this.productoHijo);
  }

  addProduct(name, img, desription, price) {
    this.app.addFavoriteProduct(name, img, desription, price);
    this.isFavorite = true;
  }

}


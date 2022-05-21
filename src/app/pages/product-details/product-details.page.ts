import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../../app.component';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  isFavorite = false;
  isLoggedIn: boolean;
  productoHijo = this.activador.snapshot.params;

  // eslint-disable-next-line max-len
  constructor(private productoService: ProductsService, private activador: ActivatedRoute, private app: AppComponent, private profileService: ProfileService) {
  }

  ngOnInit() {
    console.log(this.productoHijo);
    if(this.profileService.getLoggedInUser()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  addProduct(name, img, desription, price) {
    this.app.addFavoriteProduct(name, img, desription, price);
    this.isFavorite = true;
  }

}


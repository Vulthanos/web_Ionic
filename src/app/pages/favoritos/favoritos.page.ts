import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  products: Observable<Product[]>;

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.products = this.app.getFavoriteProducts();
  }

  deleteProduct(firebaseId) {
    this.app.deleteFavoriteProduct(firebaseId);
    this.products = this.app.getFavoriteProducts();
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SqliteDbService } from 'src/app/services/sqlite-db.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  products: Observable<Product[]>;

  constructor(private db: SqliteDbService) {
    this.db.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.products = this.db.getProducts();
      }
    });
  }

  getFavoriteProducts(): Observable<Product[]> {
    return this.products;
  }

  addFavoriteProduct(name, img, desription, price) {
    this.db.addProduct(name, img, desription, price);
  }

  deleteFavoriteProduct(firebaseId) {
    this.db.deleteProduct(firebaseId);
  }

}

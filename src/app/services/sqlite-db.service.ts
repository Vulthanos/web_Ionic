import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class SqliteDbService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  products = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'favoritos.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.seedDatabase();
      });
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  addProduct(firebaseId) {
    return this.database.executeSql('INSERT INTO favorites (firebaseId) VALUES (?)', [firebaseId]).then(() => {
      this.loadProducts();
    });
  }

  deleteProduct(firebaseId) {
    return this.database.executeSql('DELETE FROM favorites WHERE firebaseId = ?', [firebaseId]).then(() => {
      this.loadProducts();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  private seedDatabase() {
    this.http.get('src/assets/seed.sql', { responseType: 'text' }).subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql).then(() => {
        this.loadProducts();
        this.dbReady.next(true);
      }).catch(err => console.log(err));
    });
  }

  private loadProducts() {
    return this.database.executeSql('SELECT * FROM favorites', []).then(data => {
      const products: Product[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          products.push({
            firebaseId: data.rows.item(i).firebaseId
          });
        }
      }
      this.products.next(products);
    });
  }

}


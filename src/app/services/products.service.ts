import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
  import {Producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsCollection: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.productsCollection = this.af.collection<Producto>('products');
  }

  getProductos(){
    return this.productsCollection.valueChanges({ idField: 'id' });
  }
}

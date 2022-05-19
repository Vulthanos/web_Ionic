import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Producto} from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private af: AngularFirestore
  ) { }

  getProducts(){
    return this.af.collection<Producto>('products').valueChanges();
  }
}



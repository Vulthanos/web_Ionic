import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Producto} from '../interfaces/producto.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productId: string;

  constructor(private af: AngularFirestore){
  }

  getProducts(){
    return this.af.collection<Producto>('slider').valueChanges();
  }

  getProductsList(){
    return this.af.collection<Producto>('products').valueChanges();
  }

}

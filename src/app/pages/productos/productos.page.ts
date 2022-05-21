import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {Producto} from '../../interfaces/producto.interface';
import { IonSlides } from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage {
  @ViewChild('carrusel') carrusel: IonSlides;

    option = {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10
    };

    products: Observable<Producto[]>;
    productsList: Observable<Producto[]>;


  constructor(
    private productoService: ProductsService,     private af: AngularFirestore) {
    this.products = this.productoService.getProducts();
    this.productsList = this.productoService.getProductsList();

  }

  anterior() {
    this.carrusel.slidePrev();
  }

  siguiente() {
    this.carrusel.slideNext();
  }

}







import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {Producto} from '../../interfaces/producto.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    option = {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10
    };

    products: Observable<Producto[]>;


  constructor(
    private productoService: ProductsService) {
    this.products = this.productoService.getProducts();
    }

    ngOnInit() {
    }



}







import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {LoadScriptsService} from '../../services/load-scripts.service';
import {Producto} from '../../interfaces/producto.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    products: Observable<Producto[]>;
    option = {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10
    };

    constructor(private productsService: ProductsService, private _LoadScripts: LoadScriptsService) {
      this.productsService.getProductos().subscribe();
      _LoadScripts.LoadHead(['glider']);
      _LoadScripts.Load(['slider', 'glider']);
    }



    ngOnInit(): void {
    }


}

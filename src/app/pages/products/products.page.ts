import {Component, OnInit} from '@angular/core';
import {ProductsService} from "src/app/services/products.service";
import {LoadScriptsService} from "../../services/load-scripts.service";
import {Producto} from "../../interfaces/producto.interface";
import {Observable} from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})


export class ProductsPage implements OnInit {

  products: Observable<Producto[]>;
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10
  };

  constructor(private productsService: ProductsService, private _LoadScripts: LoadScriptsService) {
    this.productsService.getProductos().subscribe();
    _LoadScripts.LoadHead(["glider"]);
    _LoadScripts.Load(["slider", "glider"]);
  }



  ngOnInit(): void {
  }

}

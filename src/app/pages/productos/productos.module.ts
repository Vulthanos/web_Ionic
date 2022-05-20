import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import {ProductDetailsPageModule} from "../product-details/product-details.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductosPageRoutingModule,
        ProductDetailsPageModule
    ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}

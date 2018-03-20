import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { ProductoService } from './producto.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ProductoRoutingModule
   ],
   providers: [ProductoService],
   declarations: [ProductoComponent],
})
export class ProductoModule { }

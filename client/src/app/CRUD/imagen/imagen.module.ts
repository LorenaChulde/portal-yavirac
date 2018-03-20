import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImagenRoutingModule } from './imagen-routing.module';
import { ImagenComponent } from './imagen.component';
import { ImagenService } from './imagen.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ImagenRoutingModule
   ],
   providers: [ImagenService],
   declarations: [ImagenComponent],
})
export class ImagenModule { }

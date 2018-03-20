import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './noticia.component';
import { NoticiaService } from './noticia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NoticiaRoutingModule
   ],
   providers: [NoticiaService],
   declarations: [NoticiaComponent],
})
export class NoticiaModule { }

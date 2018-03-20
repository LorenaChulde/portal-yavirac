import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { ComentarioComponent } from './comentario.component';
import { ComentarioService } from './comentario.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ComentarioRoutingModule
   ],
   providers: [ComentarioService],
   declarations: [ComentarioComponent],
})
export class ComentarioModule { }

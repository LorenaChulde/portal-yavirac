import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiasService } from './noticias.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NoticiasRoutingModule
   ],
   providers: [NoticiasService],
   declarations: [NoticiasComponent],
})
export class NoticiasModule { }

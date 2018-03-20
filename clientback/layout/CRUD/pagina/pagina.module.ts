import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';
import { PaginaService } from './pagina.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PaginaRoutingModule
   ],
   providers: [PaginaService],
   declarations: [PaginaComponent],
})
export class PaginaModule { }

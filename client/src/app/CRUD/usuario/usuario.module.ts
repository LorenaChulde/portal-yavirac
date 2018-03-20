import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      UsuarioRoutingModule
   ],
   providers: [UsuarioService],
   declarations: [UsuarioComponent],
})
export class UsuarioModule { }

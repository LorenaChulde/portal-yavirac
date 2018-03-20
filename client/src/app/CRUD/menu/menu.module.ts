import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      MenuRoutingModule
   ],
   providers: [MenuService],
   declarations: [MenuComponent],
})
export class MenuModule { }

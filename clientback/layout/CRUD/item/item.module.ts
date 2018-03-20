import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ItemService } from './item.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ItemRoutingModule
   ],
   providers: [ItemService],
   declarations: [ItemComponent],
})
export class ItemModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './link.component';
import { LinkService } from './link.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      LinkRoutingModule
   ],
   providers: [LinkService],
   declarations: [LinkComponent],
})
export class LinkModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsiganacionLinkRoutingModule } from './asiganacionlink-routing.module';
import { AsiganacionLinkComponent } from './asiganacionlink.component';
import { AsiganacionLinkService } from './asiganacionlink.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsiganacionLinkRoutingModule
   ],
   providers: [AsiganacionLinkService],
   declarations: [AsiganacionLinkComponent],
})
export class AsiganacionLinkModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulinarioRoutingModule } from './culinario-routing.module';
import { CulinarioComponent } from './culinario.component';

@NgModule({
    imports: [CommonModule, CulinarioRoutingModule],
    declarations: [CulinarioComponent]
})
export class CulinarioModule {}

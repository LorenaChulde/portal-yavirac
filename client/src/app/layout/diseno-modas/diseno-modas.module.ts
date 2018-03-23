import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisenoModasRoutingModule } from './diseno-modas-routing.module';
import { DisenoModasComponent } from './diseno-modas.component';

@NgModule({
    imports: [CommonModule, DisenoModasRoutingModule],
    declarations: [DisenoModasComponent]
})
export class DisenoModasModule {}

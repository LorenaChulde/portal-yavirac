import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigacionRoutingModule } from './investigacion-routing.module';
import { InvestigacionComponent } from './investigacion.component';

@NgModule({
    imports: [CommonModule, InvestigacionRoutingModule],
    declarations: [InvestigacionComponent]
})
export class InvestigacionModule {}

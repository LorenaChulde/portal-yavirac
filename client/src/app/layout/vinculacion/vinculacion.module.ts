import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { VinculacionComponent } from './vinculacion.component';

@NgModule({
    imports: [CommonModule, VinculacionRoutingModule],
    declarations: [VinculacionComponent]
})
export class VinculacionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricidadRoutingModule } from './electricidad-routing.module';
import { ElectricidadComponent } from './electricidad.component';

@NgModule({
    imports: [CommonModule, ElectricidadRoutingModule],
    declarations: [ElectricidadComponent]
})
export class ElectricidadModule {}

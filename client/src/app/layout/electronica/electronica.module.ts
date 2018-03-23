import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicaRoutingModule } from './electronica-routing.module';
import { ElectronicaComponent } from './electronica.component';

@NgModule({
    imports: [CommonModule, ElectronicaRoutingModule],
    declarations: [ElectronicaComponent]
})
export class ElectronicaModule {}

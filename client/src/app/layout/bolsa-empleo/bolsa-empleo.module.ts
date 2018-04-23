import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BolsaEmpleoRoutingModule } from './bolsa-empleo-routing.module';
import { BolsaEmpleoComponent } from './bolsa-empleo.component';

@NgModule({
    imports: [CommonModule, BolsaEmpleoRoutingModule],
    declarations: [BolsaEmpleoComponent]
})
export class BolsaEmpleoModule {}

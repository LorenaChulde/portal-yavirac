import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraSoftwareRoutingModule } from './carrera-software-routing.module';
import { CarreraSoftwareComponent } from './carrera-software.component';

@NgModule({
    imports: [CommonModule, CarreraSoftwareRoutingModule],
    declarations: [CarreraSoftwareComponent]
})
export class CarreraSoftwareModule {}

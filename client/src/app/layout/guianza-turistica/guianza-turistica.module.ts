import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuianzaTuristicaRoutingModule } from './guianza-turistica-routing.module';
import { GuianzaTuristicaComponent } from './guianza-turistica.component';

@NgModule({
    imports: [CommonModule, GuianzaTuristicaRoutingModule],
    declarations: [GuianzaTuristicaComponent]
})
export class GuianzaTuristicaModule {}

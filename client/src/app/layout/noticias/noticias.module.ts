import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';

@NgModule({
    imports: [CommonModule, NoticiasRoutingModule],
    declarations: [NoticiasComponent]
})
export class NoticiasModule {}

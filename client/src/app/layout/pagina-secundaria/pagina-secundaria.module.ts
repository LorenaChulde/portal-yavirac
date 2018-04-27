import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaginaSecundariaRoutingModule } from "./pagina-secundaria-routing.module";
import { PaginaSecundariaComponent } from "./pagina-secundaria.component";
import { PaginaSecundariaService } from "./pagina-secundaria.service";

@NgModule({
    imports: [CommonModule, PaginaSecundariaRoutingModule],
    providers: [PaginaSecundariaService],
    declarations: [PaginaSecundariaComponent]
})
export class PaginaSecundariaModule {}

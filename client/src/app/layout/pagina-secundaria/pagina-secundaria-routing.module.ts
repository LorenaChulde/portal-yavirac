import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaSecundariaComponent } from './pagina-secundaria.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaSecundariaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaSecundariaRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuianzaTuristicaComponent } from './guianza-turistica.component';

const routes: Routes = [
    {
        path: '',
        component: GuianzaTuristicaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuianzaTuristicaRoutingModule {}

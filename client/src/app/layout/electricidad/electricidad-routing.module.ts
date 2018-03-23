import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricidadComponent } from './electricidad.component';

const routes: Routes = [
    {
        path: '',
        component: ElectricidadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElectricidadRoutingModule {}

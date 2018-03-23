import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolsaEmpleoComponent } from './bolsa-empleo.component';

const routes: Routes = [
    {
        path: '',
        component: BolsaEmpleoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BolsaEmpleoRoutingModule {}

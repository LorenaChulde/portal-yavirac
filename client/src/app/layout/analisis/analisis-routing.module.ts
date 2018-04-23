import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalisisComponent } from './analisis.component';

const routes: Routes = [
    {
        path: '',
        component: AnalisisComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalisisRoutingModule {}

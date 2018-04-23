import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisenoModasComponent } from './diseno-modas.component';

const routes: Routes = [
    {
        path: '',
        component: DisenoModasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisenoModasRoutingModule {}

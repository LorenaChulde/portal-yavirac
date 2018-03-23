import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinculacionComponent } from './vinculacion.component';

const routes: Routes = [
    {
        path: '',
        component: VinculacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VinculacionRoutingModule {}

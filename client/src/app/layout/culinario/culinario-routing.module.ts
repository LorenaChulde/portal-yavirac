import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulinarioComponent } from './culinario.component';

const routes: Routes = [
    {
        path: '',
        component: CulinarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CulinarioRoutingModule {}

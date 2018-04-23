import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraSoftwareComponent } from './carrera-software.component';

const routes: Routes = [
    {
        path: '',
        component: CarreraSoftwareComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarreraSoftwareRoutingModule {}

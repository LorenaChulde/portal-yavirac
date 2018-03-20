import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagenComponent } from './imagen.component';

const routes: Routes = [
   { path: '', component: ImagenComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ImagenRoutingModule { }

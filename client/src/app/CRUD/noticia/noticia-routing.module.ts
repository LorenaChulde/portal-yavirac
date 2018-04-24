import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaComponent } from './noticia.component';

const routes: Routes = [
   { path: '', component: NoticiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class NoticiaRoutingModule { }

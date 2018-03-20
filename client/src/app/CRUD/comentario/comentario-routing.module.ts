import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComentarioComponent } from './comentario.component';

const routes: Routes = [
   { path: '', component: ComentarioComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ComentarioRoutingModule { }

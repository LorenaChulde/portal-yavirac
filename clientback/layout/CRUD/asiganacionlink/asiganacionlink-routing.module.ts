import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsiganacionLinkComponent } from './asiganacionlink.component';

const routes: Routes = [
   { path: '', component: AsiganacionLinkComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsiganacionLinkRoutingModule { }

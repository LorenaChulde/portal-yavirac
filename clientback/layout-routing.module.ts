import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
   {
      path: '', component: LayoutComponent,
      children: [
         { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
         { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
         { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
         { path: 'forms', loadChildren: './form/form.module#FormModule' },
         { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
         { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
         { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
         { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
         { path: 'asiganacionlink', loadChildren: './asiganacionlink/asiganacionlink.module#AsiganacionLinkModule' },
         { path: 'comentario', loadChildren: './comentario/comentario.module#ComentarioModule' },
         { path: 'imagen', loadChildren: './imagen/imagen.module#ImagenModule' },
         { path: 'item', loadChildren: './item/item.module#ItemModule' },
         { path: 'link', loadChildren: './link/link.module#LinkModule' },
         { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
         { path: 'noticia', loadChildren: './noticia/noticia.module#NoticiaModule' },
         { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaModule' },
         { path: 'producto', loadChildren: './producto/producto.module#ProductoModule' },
         { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class LayoutRoutingModule { }

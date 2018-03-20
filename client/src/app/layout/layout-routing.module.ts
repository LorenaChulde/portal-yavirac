import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'asiganacionlink', loadChildren: './../CRUD/asiganacionlink/asiganacionlink.module#AsiganacionLinkModule' },
            { path: 'comentario', loadChildren: './../CRUD/comentario/comentario.module#ComentarioModule' },
            { path: 'imagen', loadChildren: './../CRUD/imagen/imagen.module#ImagenModule' },
            { path: 'item', loadChildren: './../CRUD/item/item.module#ItemModule' },
            { path: 'link', loadChildren: './../CRUD/link/link.module#LinkModule' },
            { path: 'menu', loadChildren: './../CRUD/menu/menu.module#MenuModule' },
            { path: 'noticia', loadChildren: './../CRUD/noticia/noticia.module#NoticiaModule' },
            { path: 'pagina', loadChildren: './../CRUD/pagina/pagina.module#PaginaModule' },
            { path: 'producto', loadChildren: './../CRUD/producto/producto.module#ProductoModule' },
            { path: 'usuario', loadChildren: './../CRUD/usuario/usuario.module#UsuarioModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

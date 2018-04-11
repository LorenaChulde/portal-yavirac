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
            { path: 'bolsa-empleo', loadChildren: './bolsa-empleo/bolsa-empleo.module#BolsaEmpleoModule' },
            { path: 'carrera-software', loadChildren: './carrera-software/carrera-software.module#CarreraSoftwareModule' },
            { path: 'investigacion', loadChildren: './investigacion/investigacion.module#InvestigacionModule' },
            { path: 'vinculacion', loadChildren: './vinculacion/vinculacion.module#VinculacionModule' },
            { path: 'diseño-modas', loadChildren: './diseno-modas/diseno-modas.module#DisenoModasModule' },
            { path: 'electricidad', loadChildren: './electricidad/electricidad.module#ElectricidadModule' },
            { path: 'guianza-turistica', loadChildren: './guianza-turistica/guianza-turistica.module#GuianzaTuristicaModule' },
            { path: 'culinario', loadChildren: './culinario/culinario.module#CulinarioModule' },
            { path: 'electronica', loadChildren: './electronica/electronica.module#ElectronicaModule' },
            { path: 'analisis', loadChildren: './analisis/analisis.module#AnalisisModule' },
            { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingModule' },
            { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

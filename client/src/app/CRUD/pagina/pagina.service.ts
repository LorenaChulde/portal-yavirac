import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Pagina } from '../../entidades/CRUD/Pagina';
import { PaginaImagen } from '../../entidades/especifico/PaginaImagen';
import { PaginaMenu } from '../../entidades/especifico/PaginaMenu';

@Injectable()

export class PaginaService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl + 'pagina';
   private urlBase1 = environment.apiUrl + 'pagina_imagen';
   private urlBase2 = environment.apiUrl + 'pagina_menu';

   constructor(private http: Http) {
   }

   baseUrl(): string {
       return this.urlBase;
   }
   insertarPagina(entidadTransporte: Pagina): Promise<boolean> {
    return this.http
        .post(this.urlBase + '/insertar_pagina', JSON.stringify(entidadTransporte))
        .toPromise()
        .then(response => response.json() as Pagina[])
        .catch(this.handleError);
}
   getAll(): Promise<Pagina[]> {
      return this.http.get(this.urlBase+'/leer').toPromise().then(response=>response.json() as Pagina[]).catch(this.handleError);
   }
   getPaginaImagen(): Promise<PaginaImagen[]> {
    return this.http.get(this.urlBase1 + '/consultar').toPromise().then(response => response.json() as PaginaImagen[]).catch(this.handleError);
}
getPaginaMenu(): Promise<PaginaMenu[]> {
    return this.http.get(this.urlBase2 + '/consultar').toPromise().then(response => response.json() as PaginaMenu[]).catch(this.handleError);
}

   getPagina(pagina: number, tamanoPagina: number): Promise<Pagina[]> {
      return this.http.get(this.urlBase+'/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json() as Pagina[]).catch(this.handleError);
   }

   getFiltrado(columna: string, tipoFiltro: string, filtro: string): Promise<Pagina[]> {
      return this.http.get(this.urlBase+'/leer_filtrado' + '?columna=' + columna + '&tipo_filtro=' + tipoFiltro + '&filtro=' + filtro).toPromise().then(response=>response.json() as Pagina[]).catch(this.handleError);
   }

   getNumeroPaginas(tamanoPagina: number): Promise<any> {
      return this.http.get(this.urlBase+'/numero_paginas' + '?registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   get(id: number): Promise<Pagina> {
      const url = `${this.urlBase+'/leer'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>(response.json() as Pagina[])[0]).catch(this.handleError);
   }

   remove(id: number): Promise<boolean> {
      const url = `${this.urlBase+'/borrar'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>response.json() as Pagina).catch(this.handleError);
   }

   create(entidadTransporte: Pagina): Promise<boolean> {
      const url = `${this.urlBase+'/crear'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   update(entidadTransporte: Pagina): Promise<boolean> {
      const url = `${this.urlBase+'/actualizar'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
}
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Imagen } from '../../entidades/CRUD/Imagen';


@Injectable()

export class ImagenService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl + 'imagen';

   constructor(private http: Http) {
   }

   baseUrl(): string {
       return this.urlBase;
   }
   insertarImagen(entidadTransporte: Imagen): Promise<boolean> {
    return this.http
        .post(this.urlBase + '/insertar_imagen', JSON.stringify(entidadTransporte))
        .toPromise()
        .then(response => response.json() as Imagen[])
        .catch(this.handleError);
}

   getAll(): Promise<Imagen[]> {
      return this.http.get(this.urlBase+'/leer').toPromise().then(response=>response.json() as Imagen[]).catch(this.handleError);
   }
   getImagen(): Promise<Imagen[]> {
    return this.http.get(this.urlBase + 'leer').toPromise().then(response => response.json() as Imagen[]).catch(this.handleError);
}

   getPagina(pagina: number, tamanoPagina: number): Promise<Imagen[]> {
      return this.http.get(this.urlBase+'/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json() as Imagen[]).catch(this.handleError);
   }

   getFiltrado(columna: string, tipoFiltro: string, filtro: string): Promise<Imagen[]> {
      return this.http.get(this.urlBase+'/leer_filtrado' + '?columna=' + columna + '&tipo_filtro=' + tipoFiltro + '&filtro=' + filtro).toPromise().then(response=>response.json() as Imagen[]).catch(this.handleError);
   }

   getNumeroPaginas(tamanoPagina: number): Promise<any> {
      return this.http.get(this.urlBase+'/numero_paginas' + '?registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   get(id: number): Promise<Imagen> {
      const url = `${this.urlBase+'/leer'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>(response.json() as Imagen[])[0]).catch(this.handleError);
   }

   remove(id: number): Promise<boolean> {
      const url = `${this.urlBase+'/borrar'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>response.json() as Imagen).catch(this.handleError);
   }

   create(entidadTransporte: Imagen): Promise<boolean> {
      const url = `${this.urlBase+'/crear'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   update(entidadTransporte: Imagen): Promise<boolean> {
      const url = `${this.urlBase+'/actualizar'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
}
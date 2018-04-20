import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Comentario } from '../../entidades/CRUD/Comentario';
import { ComentarioUsuario } from '../../entidades/especifico/ComentarioUsuario';
import { ComentarioNoticia } from '../../entidades/especifico/ComentarioNoticia';

@Injectable()

export class ComentarioService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl + 'comentario';
   private urlBase1 = environment.apiUrl + 'comentario_usuario';
   private urlBase2 = environment.apiUrl + 'comentario_noticia';

   constructor(private http: Http) {
   }

   baseUrl(): string {
       return this.urlBase;
   }

   getAll(): Promise<Comentario[]> {
      return this.http.get(this.urlBase+'/leer').toPromise().then(response=>response.json() as Comentario[]).catch(this.handleError);
   }
   getComentarioUsuario(): Promise<ComentarioUsuario[]> {
    return this.http.get(this.urlBase1+'/consultar').toPromise().then(response=>response.json() as ComentarioUsuario[]).catch(this.handleError);
 }
 getComentarioNoticia(): Promise<ComentarioNoticia[]> {
    return this.http.get(this.urlBase2+'/consultar').toPromise().then(response=>response.json() as ComentarioNoticia[]).catch(this.handleError);
 }

   getPagina(pagina: number, tamanoPagina: number): Promise<Comentario[]> {
      return this.http.get(this.urlBase+'/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json() as Comentario[]).catch(this.handleError);
   }

   getFiltrado(columna: string, tipoFiltro: string, filtro: string): Promise<Comentario[]> {
      return this.http.get(this.urlBase+'/leer_filtrado' + '?columna=' + columna + '&tipo_filtro=' + tipoFiltro + '&filtro=' + filtro).toPromise().then(response=>response.json() as Comentario[]).catch(this.handleError);
   }

   getNumeroPaginas(tamanoPagina: number): Promise<any> {
      return this.http.get(this.urlBase+'/numero_paginas' + '?registros_por_pagina=' + tamanoPagina).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   get(id: number): Promise<Comentario> {
      const url = `${this.urlBase+'/leer'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>(response.json() as Comentario[])[0]).catch(this.handleError);
   }

   remove(id: number): Promise<boolean> {
      const url = `${this.urlBase+'/borrar'}?id=${id}`;
      return this.http.get(url).toPromise().then(response=>response.json() as Comentario).catch(this.handleError);
   }

   create(entidadTransporte: Comentario): Promise<boolean> {
      const url = `${this.urlBase+'/crear'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   update(entidadTransporte: Comentario): Promise<boolean> {
      const url = `${this.urlBase+'/actualizar'}`;
      return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
}
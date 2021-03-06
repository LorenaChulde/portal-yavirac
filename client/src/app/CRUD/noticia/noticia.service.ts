import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Noticia } from '../../entidades/CRUD/Noticia';
import { NoticiaFoto } from '../../entidades/especifico/NoticiaFoto';
import { NoticiaPagina } from '../../entidades/especifico/NoticiaPagina';

@Injectable()

export class NoticiaService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    private urlBase = environment.apiUrl + 'noticia';
    private urlBase1 = environment.apiUrl + 'noticias_foto';
    private urlBase2 = environment.apiUrl + 'noticias_pagina';

    constructor(private http: Http) {
    }

    baseUrl(): string {
        return this.urlBase;
    }

    insertarNoticia(entidadTransporte: Noticia): Promise<boolean> {
        return this.http
            .post(this.urlBase + '/insertar_noticia', JSON.stringify(entidadTransporte))
            .toPromise()
            .then(response => response.json() as Noticia[])
            .catch(this.handleError);
    }

    getAll(): Promise<Noticia[]> {
        return this.http.get(this.urlBase + '/leer').toPromise().then(response => response.json() as Noticia[]).catch(this.handleError);
    }
    getNoticiaFoto(): Promise<NoticiaFoto[]> {
        return this.http.get(this.urlBase1 + '/consultar').toPromise().then(response => response.json() as NoticiaFoto[]).catch(this.handleError);
    }
    getNoticiaPagina(): Promise<NoticiaPagina[]> {
        return this.http.get(this.urlBase2 + '/consultar').toPromise().then(response => response.json() as NoticiaPagina[]).catch(this.handleError);
    }

    getPagina(pagina: number, tamanoPagina: number): Promise<Noticia[]> {
        return this.http.get(this.urlBase + '/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina).toPromise().then(response => response.json() as Noticia[]).catch(this.handleError);
    }

    getFiltrado(columna: string, tipoFiltro: string, filtro: string): Promise<Noticia[]> {
        return this.http.get(this.urlBase + '/leer_filtrado' + '?columna=' + columna + '&tipo_filtro=' + tipoFiltro + '&filtro=' + filtro).toPromise().then(response => response.json() as Noticia[]).catch(this.handleError);
    }

    getNumeroPaginas(tamanoPagina: number): Promise<any> {
        return this.http.get(this.urlBase + '/numero_paginas' + '?registros_por_pagina=' + tamanoPagina).toPromise().then(response => response.json()).catch(this.handleError);
    }

    get(id: number): Promise<Noticia> {
        const url = `${this.urlBase + '/leer'}?id=${id}`;
        return this.http.get(url).toPromise().then(response => (response.json() as Noticia[])[0]).catch(this.handleError);
    }

    remove(id: number): Promise<boolean> {
        const url = `${this.urlBase + '/borrar'}?id=${id}`;
        return this.http.get(url).toPromise().then(response => response.json() as Noticia).catch(this.handleError);
    }

    create(entidadTransporte: Noticia): Promise<boolean> {
        const url = `${this.urlBase + '/crear'}`;
        return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response => response.json()).catch(this.handleError);
    }

    update(entidadTransporte: Noticia): Promise<boolean> {
        const url = `${this.urlBase + '/actualizar'}`;
        return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response => response.json()).catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
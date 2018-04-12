import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Item } from '../../entidades/CRUD/Item';
import { ItemMenu } from '../../entidades/especifico/ItemMenu';
import { ItemPagina } from '../../entidades/especifico/ItemPagina';

@Injectable()

export class ItemService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    private urlBase = environment.apiUrl + 'item';
    private urlBase1 = environment.apiUrl + 'item_menu';
    private urlBase2 = environment.apiUrl + 'item_pagina';

    constructor(private http: Http) {
    }

    baseUrl(): string {
        return this.urlBase;
    }

    getAll(): Promise<Item[]> {
        return this.http.get(this.urlBase + '/leer').toPromise().then(response => response.json() as Item[]).catch(this.handleError);
    }
    getItemMenu(): Promise<ItemMenu[]> {
        return this.http.get(this.urlBase1 + '/consultar').toPromise().then(response => response.json() as ItemMenu[]).catch(this.handleError);
    }
    getItemPagina(): Promise<ItemPagina[]> {
        return this.http.get(this.urlBase2 + '/consultar').toPromise().then(response => response.json() as ItemPagina[]).catch(this.handleError);
    }
    getPagina(pagina: number, tamanoPagina: number): Promise<Item[]> {
        return this.http.get(this.urlBase + '/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina).toPromise().then(response => response.json() as Item[]).catch(this.handleError);
    }

    getFiltrado(columna: string, tipoFiltro: string, filtro: string): Promise<Item[]> {
        return this.http.get(this.urlBase + '/leer_filtrado' + '?columna=' + columna + '&tipo_filtro=' + tipoFiltro + '&filtro=' + filtro).toPromise().then(response => response.json() as Item[]).catch(this.handleError);
    }

    getNumeroPaginas(tamanoPagina: number): Promise<any> {
        return this.http.get(this.urlBase + '/numero_paginas' + '?registros_por_pagina=' + tamanoPagina).toPromise().then(response => response.json()).catch(this.handleError);
    }

    get(id: number): Promise<Item> {
        const url = `${this.urlBase + '/leer'}?id=${id}`;
        return this.http.get(url).toPromise().then(response => (response.json() as Item[])[0]).catch(this.handleError);
    }

    remove(id: number): Promise<boolean> {
        const url = `${this.urlBase + '/borrar'}?id=${id}`;
        return this.http.get(url).toPromise().then(response => response.json() as Item).catch(this.handleError);
    }

    create(entidadTransporte: Item): Promise<boolean> {
        const url = `${this.urlBase + '/crear'}`;
        return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response => response.json()).catch(this.handleError);
    }

    update(entidadTransporte: Item): Promise<boolean> {
        const url = `${this.urlBase + '/actualizar'}`;
        return this.http.post(url, JSON.stringify(entidadTransporte)).toPromise().then(response => response.json()).catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
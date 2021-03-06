import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { AsiganacionLink } from '../../entidades/CRUD/AsiganacionLink';
import { AsiganacionLinkPagina } from '../../entidades/especifico/AsiganacionLinkPagina';
import { AsignacionLinkDLink } from '../../entidades/especifico/AsignacionLinkDLink';

@Injectable()
export class AsiganacionLinkService {
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    private urlBase = environment.apiUrl + 'asiganacionlink';
    private urlBase1 = environment.apiUrl + 'asiganacionlink_pagina';
    private urlBase2 = environment.apiUrl + 'asignacionlink_link';

    constructor(private http: Http) {}

    baseUrl(): string {
        return this.urlBase;
    }

    getAll(): Promise<AsiganacionLink[]> {
        return this.http
            .get(this.urlBase + '/leer')
            .toPromise()
            .then(response => response.json() as AsiganacionLink[])
            .catch(this.handleError);
    }
    getAsiganacionLinkPagina(): Promise<AsiganacionLinkPagina[]> {
        return this.http
            .get(this.urlBase1 + '/consultar')
            .toPromise()
            .then(response => response.json() as AsiganacionLinkPagina[])
            .catch(this.handleError);
    }
    getAsignacionLinkDLink  (): Promise<AsignacionLinkDLink[]> {
        return this.http
            .get(this.urlBase2 + '/consultar')
            .toPromise()
            .then(response => response.json() as AsignacionLinkDLink[])
            .catch(this.handleError);
    }
    getPagina(
        pagina: number,
        tamanoPagina: number
    ): Promise<AsiganacionLink[]> {
        return this.http
            .get(
                this.urlBase +
                    '/leer_paginado' +
                    '?pagina=' +
                    pagina +
                    '&registros_por_pagina=' +
                    tamanoPagina
            )
            .toPromise()
            .then(response => response.json() as AsiganacionLink[])
            .catch(this.handleError);
    }

    getFiltrado(
        columna: string,
        tipoFiltro: string,
        filtro: string
    ): Promise<AsiganacionLink[]> {
        return this.http
            .get(
                this.urlBase +
                    '/leer_filtrado' +
                    '?columna=' +
                    columna +
                    '&tipo_filtro=' +
                    tipoFiltro +
                    '&filtro=' +
                    filtro
            )
            .toPromise()
            .then(response => response.json() as AsiganacionLink[])
            .catch(this.handleError);
    }

    getNumeroPaginas(tamanoPagina: number): Promise<any> {
        return this.http
            .get(
                this.urlBase +
                    '/numero_paginas' +
                    '?registros_por_pagina=' +
                    tamanoPagina
            )
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    get(id: number): Promise<AsiganacionLink> {
        const url = `${this.urlBase + '/leer'}?id=${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => (response.json() as AsiganacionLink[])[0])
            .catch(this.handleError);
    }

    remove(id: number): Promise<boolean> {
        const url = `${this.urlBase + '/borrar'}?id=${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json() as AsiganacionLink)
            .catch(this.handleError);
    }

    create(entidadTransporte: AsiganacionLink): Promise<boolean> {
        const url = `${this.urlBase + '/crear'}`;
        return this.http
            .post(url, JSON.stringify(entidadTransporte))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    update(entidadTransporte: AsiganacionLink): Promise<boolean> {
        const url = `${this.urlBase + '/actualizar'}`;
        return this.http
            .post(url, JSON.stringify(entidadTransporte))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

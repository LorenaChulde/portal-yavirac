import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { PaginaSecundaria } from '../../entidades/especifico/PaginaSecundaria';

@Injectable()
export class PaginaSecundariaService {
    handleError(arg0: any): any {
        throw new Error('Method not implemented.');
    }
        // tslint:disable-next-line:member-ordering
        private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    // tslint:disable-next-line:member-ordering
    private urlBase = environment.apiUrl + 'pagina_secundaria';

    constructor(private http: Http) { }

    baseUrl(): string {
        return this.urlBase;
    }

    getAll(): Promise<PaginaSecundaria[]> {
        return this.http
            .get(this.urlBase + '/leer')
            .toPromise()
            .then(response => response.json() as PaginaSecundaria[])
            .catch(this.handleError);
    }
    getPaginaSecundaria(idPaginaSecundaria): Promise<PaginaSecundaria> {
        console.log(this.urlBase + '/leer_pagina_secundaria?idPaginaSecundaria=' + idPaginaSecundaria);
        return this.http
            .get(this.urlBase + '/leer_pagina_secundaria?idPaginaSecundaria=' + idPaginaSecundaria)
            .toPromise()
            .then(response => response.json() as PaginaSecundaria)
            .catch(this.handleError);
    }
}

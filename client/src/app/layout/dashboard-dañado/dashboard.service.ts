import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { Noticias } from '../../entidades/especifico/Noticias';

@Injectable()
export class DashboardService {
    handleError(arg0: any): any {
        throw new Error('Method not implemented.');
    }
        // tslint:disable-next-line:member-ordering
        private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    // tslint:disable-next-line:member-ordering
    private urlBase = environment.apiUrl + 'dashboard';

    constructor(private http: Http) { }

    baseUrl(): string {
        return this.urlBase;
    }

    getAll(): Promise<Noticias[]> {
        return this.http
            .get(this.urlBase + '/leer')
            .toPromise()
            .then(response => response.json() as Noticias[])
            .catch(this.handleError);
    }
    getNoticias(): Promise<Noticias[]> {

        return this.http
            .get(this.urlBase + '/leer_noticias')
            .toPromise()
            .then(response => response.json() as Noticias[])
            .catch(this.handleError);
    }
}

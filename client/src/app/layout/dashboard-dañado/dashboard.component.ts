import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ToastsManager } from 'ng2-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from './dashboard.service';
import { Dashboard } from '../../entidades/especifico/Dashboard';
import { Noticias } from '../../entidades/especifico/Noticias';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    busy: Promise<any>;
    entidades: Dashboard[];
    noticias: Noticias[];
    entidadSeleccionada: Dashboard;
    dashboard: Dashboard;

    constructor(
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private dataService: DashboardService,
        private modalService: NgbModal
    ) {


        }

    enviarNoticia(idNoticia){
        localStorage.setItem('idNoticia', idNoticia);
    }

    getNoticias(): void {
        this.busy = this.dataService
            .getNoticias()
            .then(entidadesRecuperadas => {
                this.noticias = entidadesRecuperadas;
                if (entidadesRecuperadas == null) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }
    ngOnInit() {
        this.getNoticias();
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);

    }
}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaginaSecundaria } from '../../entidades/especifico/PaginaSecundaria';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    busy: Promise<void>;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public paginaSecundaria: PaginaSecundaria[];
    constructor(
        private dataService: DashboardService,
    ) {


        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Esperando Noticias...`
            },
            {
                id: 2,
                type: 'warning',
                message: `Esperando Noticias...`
            },
            {
                id: 3,
                type: 'info',
                message: `Esperando Noticias...`
            },
            {
                id: 4,
                type: 'danger',
                message: `Esperando Noticias...`
            },
            {
                id: 5,
                type: 'dark',
                message: `Esperando Noticias`
            }
        );
    }

    enviarNoticia(idNoticia) {
        localStorage.setItem('idNoticia', idNoticia);
    }
    enviarPaginaSecundaria(idPaginaSecundaria) {
        localStorage.setItem('idPaginaSecundaria', idPaginaSecundaria);
    }

    /*getPaginaSecundaria(): void {
        this.busy = this.dataService
            .getPaginaSecundaria()
            .then(entidadesRecuperadas => {
                this.paginaSecundaria = entidadesRecuperadas;
                console.log(this.paginaSecundaria.descripcion);
                if (entidadesRecuperadas == null) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }*/
    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

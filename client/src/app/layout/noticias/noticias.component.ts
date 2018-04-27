import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Noticias } from '../../entidades/especifico/Noticias';
import { NoticiasService } from './noticias.service';

import 'rxjs/add/operator/toPromise';
// import { ModalComponent } from 'app/layout/bs-component/components';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
    busy: Promise<any>;
    entidades: Noticias[];
    entidadSeleccionada: Noticias;
    noticia: Noticias;
    pagina: 1;
    tamanoPagina: 20;
    paginaActual: number;
    paginaUltima: number;
    registrosPorPagina: number;
    esVisibleVentanaEdicion: boolean;

    constructor(
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private dataService: NoticiasService,
        private modalService: NgbModal
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    getNoticia(): void {
        this.busy = this.dataService
            .getNoticia(localStorage.getItem('idNoticia'))
            .then(entidadesRecuperadas => {
                this.noticia = entidadesRecuperadas;
                console.log(this.noticia.titulo);
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
        this.getNoticia();
    }
}

import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { PaginaSecundaria } from "../../entidades/especifico/PaginaSecundaria";
import { PaginaSecundariaService } from "./pagina-secundaria.service";

import "rxjs/add/operator/toPromise";
// import { ModalComponent } from 'app/layout/bs-component/components';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
    selector: "app-pagina-secundaria",
    templateUrl: "./pagina-secundaria.component.html",
    styleUrls: ["./pagina-secundaria.component.scss"]
})
export class PaginaSecundariaComponent implements OnInit {
    busy: Promise<any>;
    entidades: PaginaSecundaria[];
    entidadSeleccionada: PaginaSecundaria;
    paginaSecundaria: PaginaSecundaria;
    pagina: 1;
    tamanoPagina: 20;
    paginaActual: number;
    paginaUltima: number;
    registrosPorPagina: number;
    esVisibleVentanaEdicion: boolean;
    srcImagen: string;

    constructor(
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private dataService: PaginaSecundariaService,
        private modalService: NgbModal
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }
    getPaginaSecundaria(): void {
        console.log(localStorage.getItem("idPaginaSecundaria"));
        this.busy = this.dataService
            .getPaginaSecundaria(localStorage.getItem("idPaginaSecundaria"))
            .then(entidadesRecuperadas => {

                this.paginaSecundaria = entidadesRecuperadas;
                this.srcImagen =
                    "data:" +
                    this.paginaSecundaria[0].tipoArchivo +
                    ';base64,' +
                    this.paginaSecundaria[0].adjunto;
                    console.log(this.srcImagen);

                console.log(this.paginaSecundaria.descripcion);
                if (entidadesRecuperadas == null) {
                    this.toastr.success("¡No hay datos!", "Consulta");
                } else {
                    this.toastr.success("La consulta fue exitosa", "Consulta");
                }
            })
            .catch(error => {
                this.toastr.success("Se produjo un error", "Consulta");
            });
    }

    ngOnInit() {
        this.paginaSecundaria = new PaginaSecundaria();
        this.getPaginaSecundaria();
    }
}

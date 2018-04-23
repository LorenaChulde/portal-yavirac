import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Noticia } from '../../entidades/CRUD/Noticia';
import { NoticiaFoto } from '../../entidades/especifico/NoticiaFoto';
import { NoticiaPagina } from '../../entidades/especifico/NoticiaPagina';
import { NoticiaService } from './noticia.service';

import 'rxjs/add/operator/toPromise';
import { ModalComponent } from './../../layout/bs-component/components';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.scss']
})

export class NoticiaComponent implements OnInit {

    busy: Promise<any>;
    entidades: Noticia[];
    entidadesNoticiaFoto: NoticiaFoto[];
    entidadesNoticiaPagina: NoticiaPagina[];
    entidadSeleccionada: Noticia;
    pagina: 1;
    tamanoPagina: 20;
    paginaActual: number;
    paginaUltima: number;
    registrosPorPagina: number;
    esVisibleVentanaEdicion: boolean;
    imagenNoticia: string;
    srcImagen: string;
    imagenNombre: string;
    imagenType: string;
    imagenFile: string;
    NoticiaService: string;


    constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private dataService: NoticiaService, private modalService: NgbModal) {
        this.toastr.setRootViewContainerRef(vcr);
    }
    CodificarArchivo(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imagenNombre = file.name;
                this.imagenType = file.type;
                this.imagenFile = reader.result.split(',')[1];
                this.srcImagen = 'data:' + this.imagenType + ';base64,' + this.imagenFile;
            };
        }
    }
    insertarNoticia(entidadNueva: Noticia): void {

        entidadNueva.nombreArchivo = this.imagenNombre;
        entidadNueva.adjunto = this.imagenFile;
        entidadNueva.tipoArchivo = this.imagenType;
        console.log('id de la foto ' + entidadNueva.nombreArchivo);
        console.log('id de la pagina ' + entidadNueva.tipoArchivo);
        console.log('es publico? ' + entidadNueva.adjunto);

        this.busy = this.dataService.insertarNoticia(entidadNueva)
            .then(respuesta => {
                if (respuesta) {
                    this.toastr.success('La creación fue exitosa', 'Creación');
                } else {
                    this.toastr.warning('Se produjo un error', 'Creación');
                }
                this.refresh();
            })
            .catch(error => {
                this.toastr.warning('Se produjo un error', 'Creación');
            });
    }
    open(content, nuevo) {
        if (nuevo) {
            this.resetEntidadSeleccionada();
        }
        this.modalService.open(content)
            .result
            .then((result => {
                if (result === 'save') {
                    this.aceptar();
                }
            }), (result => {
                // Esto se ejecuta si la ventana se cierra sin aceptar los cambios
            }));
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.entidadSeleccionada == null) {
            return false;
        }
        return porVerificar.id === this.entidadSeleccionada.id;
    }

    cerrarVentanaEdicion(): void {
        this.esVisibleVentanaEdicion = false;
    }

    mostrarVentanaNuevo(): void {
        this.resetEntidadSeleccionada();
        this.esVisibleVentanaEdicion = true;
    }

    mostrarVentanaEdicion(): void {
        this.esVisibleVentanaEdicion = true;
    }

    resetEntidadSeleccionada(): void {
        this.entidadSeleccionada = this.crearEntidad();
    }

    getAll(): void {
        this.busy = this.dataService
            .getAll()
            .then(entidadesRecuperadas => {
                this.entidades = entidadesRecuperadas;
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }
    getNoticiaFoto(): void {
        this.busy = this.dataService
            .getNoticiaFoto()
            .then(entidadesRecuperadas => {
                this.entidadesNoticiaFoto = entidadesRecuperadas;
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }
    getNoticiaPagina(): void {
        this.busy = this.dataService
            .getNoticiaPagina()
            .then(entidadesRecuperadas => {
                this.entidadesNoticiaPagina = entidadesRecuperadas;
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }
    getPagina(pagina: number, tamanoPagina: number): void {
        this.busy = this.dataService
            .getPagina(pagina, tamanoPagina)
            .then(entidadesRecuperadas => {
                this.entidades = entidadesRecuperadas;
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }

    getNumeroPaginas(tamanoPagina: number): void {
        this.busy = this.dataService
            .getNumeroPaginas(tamanoPagina)
            .then(respuesta => {
                this.paginaUltima = respuesta.paginas;
            })
            .catch(error => {
                // Error al leer las paginas
            });
    }

    isValid(entidadPorEvaluar: Noticia): boolean {
        return true;
    }

    aceptar(): void {
        this.insertarNoticia(this.entidadSeleccionada);
        this.cerrarVentanaEdicion();
    }

    crearEntidad(): Noticia {
        const nuevoNoticia = new Noticia();
        nuevoNoticia.id = 0;
        return nuevoNoticia;
    }

    add(entidadNueva: Noticia): void {
        this.busy = this.dataService.create(entidadNueva)
            .then(respuesta => {
                if (respuesta) {
                    this.toastr.success('La creación fue exitosa', 'Creación');
                } else {
                    this.toastr.warning('Se produjo un error', 'Creación');
                }
                this.refresh();
            })
            .catch(error => {
                this.toastr.warning('Se produjo un error', 'Creación');
            });
    }

    update(entidadParaActualizar: Noticia): void {
        this.busy = this.dataService.update(entidadParaActualizar)
            .then(respuesta => {
                if (respuesta) {
                    this.toastr.success('La actualización fue exitosa', 'Actualización');
                } else {
                    this.toastr.warning('Se produjo un error', 'Actualización');
                }
                this.refresh();
            })
            .catch(error => {
                this.toastr.warning('Se produjo un error', 'Actualización');
            });
    }

    delete(entidadParaBorrar: Noticia): void {
        this.busy = this.dataService.remove(entidadParaBorrar.id)
            .then(respuesta => {
                if (respuesta) {
                    this.toastr.success('La eliminación fue exitosa', 'Eliminación');
                } else {
                    this.toastr.warning('Se produjo un error', 'Eliminación');
                }
                this.refresh();
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Eliminación');
            });
    }

    refresh(): void {
        this.getNumeroPaginas(this.registrosPorPagina);
        this.getPagina(this.paginaActual, this.registrosPorPagina);
        this.entidades = Noticia[0];
        this.entidadSeleccionada = this.crearEntidad();
    }

    getPaginaAnterior(): void {
        if (this.paginaActual > 1) {
            this.paginaActual = this.paginaActual - 1;
            this.refresh();
        }
    }

    ngOnInit(){
        this.entidadSeleccionada = this.crearEntidad();
        this.paginaActual = 1;
        this.registrosPorPagina = 5;
        this.refresh();
        this.getNoticiaFoto();
        this.getNoticiaPagina();
    }

    onSelect(entidadActual: Noticia): void {
        this.entidadSeleccionada = entidadActual;
    }
}

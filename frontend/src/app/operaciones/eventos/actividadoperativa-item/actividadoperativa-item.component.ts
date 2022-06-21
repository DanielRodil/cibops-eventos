import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';

@Component({
  selector: 'app-actividadoperativa-item',
  templateUrl: './actividadoperativa-item.component.html',
  styleUrls: ['./actividadoperativa-item.component.css']
})
export class ActividadoperativaItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
  @Output() actividadOperativaEliminar = new EventEmitter<ActividadoperativaImpl>();
  @Output() actividadOperativaEditar = new EventEmitter<ActividadoperativaImpl>();

  constructor() { }
  
  ngOnInit(): void {
  }

  eliminarAO(): void{
    if (confirm(`¿Está seguro de que desea eliminar la actividad operativa ${this.actividadoperativa.nombre}? Recuerde que no puede borrar un evento si tiene agentes asignados`)){
      this.actividadOperativaEliminar.emit(this.actividadoperativa);
    }
  }

  editarAO(): void{
    this.actividadOperativaEditar.emit(this.actividadoperativa);
  }

}
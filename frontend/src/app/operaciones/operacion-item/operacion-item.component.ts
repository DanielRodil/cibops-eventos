import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-operacion-item',
  templateUrl: './operacion-item.component.html',
  styleUrls: ['./operacion-item.component.css']
})
export class OperacionItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() operacion: Operacion = new OperacionImpl();
  @Output() operacionEliminar = new EventEmitter<OperacionImpl>();
  @Output() operacionConsultar = new EventEmitter<OperacionImpl>();
  @Output() operacionSeleccionada = new EventEmitter<Operacion>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void{
    if (confirm(`¿Está seguro de que desea eliminar la operación ${this.operacion.nombre} ?`)){
      this.operacionEliminar.emit(this.operacion);
    }
  }

  consultar(): void{
    this.operacionConsultar.emit(this.operacion);
  }

  seleccionar(): void {
    this.operacionSeleccionada.emit(this.operacion);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';

@Component({
  selector: 'app-gestionjudicial-item',
  templateUrl: './gestionjudicial-item.component.html',
  styleUrls: ['./gestionjudicial-item.component.css']
})
export class GestionjudicialItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
  @Output() gestionjudicialEliminar = new EventEmitter<GestionjudicialImpl>();

  constructor() { }
  
  ngOnInit(): void {
  }

  eliminar(): void{
    if (confirm(`¿Está seguro de que desea eliminar la gestion judicial ${this.gestionjudicial.nombre}?`)){
      this.gestionjudicialEliminar.emit(this.gestionjudicial);
    }
  }

}
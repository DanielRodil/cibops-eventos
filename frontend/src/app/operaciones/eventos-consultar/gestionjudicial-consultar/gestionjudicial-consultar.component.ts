import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';

@Component({
  selector: 'app-gestionjudicial-consultar',
  templateUrl: './gestionjudicial-consultar.component.html',
  styleUrls: ['./gestionjudicial-consultar.component.css']
})
export class GestionjudicialConsultarComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();

  constructor() { }
  
  ngOnInit(): void {
  }

}
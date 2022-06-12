import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }
  
  ngOnInit(): void {
  }

}
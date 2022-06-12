import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';

@Component({
  selector: 'app-actividadoperativa-consultar',
  templateUrl: './actividadoperativa-consultar.component.html',
  styleUrls: ['./actividadoperativa-consultar.component.css']
})
export class ActividadoperativaConsultarComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();

  constructor() { }
  
  ngOnInit(): void {
  }

}
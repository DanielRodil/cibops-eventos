import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }
  
  ngOnInit(): void {
  }

}
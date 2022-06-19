import { Component, Input, OnInit } from '@angular/core';
import { Agente } from '../../models/agente';
import { AgenteImpl } from '../../models/agente-impl';

@Component({
  selector: 'app-agente-item',
  templateUrl: './agente-item.component.html',
  styleUrls: ['./agente-item.component.css']
})
export class AgenteItemComponent implements OnInit {

  @Input() agente: Agente = new AgenteImpl();

  constructor() { }

  ngOnInit(): void {
  }

}

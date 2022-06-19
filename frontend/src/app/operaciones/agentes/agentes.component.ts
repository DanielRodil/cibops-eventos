import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenteImpl } from '../models/agente-impl';
import { AgenteService } from '../service/agente.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {

  agentes: AgenteImpl[] = [];

  constructor(private agenteService: AgenteService,
              private router : Router) { }

  ngOnInit(): void {
    this.agenteService.getAgentes().subscribe((response) =>
    this.agentes = this.agenteService.extraerAgentes(response))
  }

}

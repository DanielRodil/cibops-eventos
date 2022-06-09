import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';
import { OperacionService } from '../service/operacion.service';

@Component({
  selector: 'app-operacion-form',
  templateUrl: './operacion-form.component.html',
  styleUrls: ['./operacion-form.component.css']
})
export class OperacionFormComponent implements OnInit {
  operacion: Operacion = new OperacionImpl ();

  constructor(private operacionService: OperacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddOperacion(): void {
    this.operacionService.addOperacion(this.operacion).subscribe((response) => {
      this.router.navigate(['/operaciones']);
    });
  }

}

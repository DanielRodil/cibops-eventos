import { Operacion } from "./operacion";

export class OperacionImpl implements Operacion {
  operacionId: string = '';
  nombre: string = '';
  descripcion: string = '';
  fechaApertura: string = '';
  fechaCierre: string = '';
  urlOperacion: string = '';
  agente: string = '';

  constructor() {};

}

import { Actividadoperativa } from "./actividadoperativa";
import { EventoImpl } from "./evento-impl";

export class ActividadoperativaImpl extends EventoImpl implements Actividadoperativa {
    actividadoperativaId: string = '';
    gastos: number = 0;
}

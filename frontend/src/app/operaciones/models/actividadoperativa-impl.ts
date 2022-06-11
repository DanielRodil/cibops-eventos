import { Actividadoperativa } from "./actividadoperativa";
import { EventoImpl } from "./evento-impl";

export class ActividadoperativaImpl extends EventoImpl implements Actividadoperativa {
    gastos: number = 0;

    constructor() {
        super();
    };

}

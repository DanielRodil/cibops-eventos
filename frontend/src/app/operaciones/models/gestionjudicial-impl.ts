import { EventoImpl } from "./evento-impl";
import { Gestionjudicial } from "./gestionjudicial";

export class GestionjudicialImpl extends EventoImpl implements Gestionjudicial {
    gestionjudicialId: string = '';
    organojudicial: string = '';
}

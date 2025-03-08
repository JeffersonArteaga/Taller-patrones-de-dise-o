import { IEstrategia } from "./IEstrategia";

export class Contexto {
    private estrategia: IEstrategia;

    constructor(estrategia: IEstrategia) {
        this.estrategia = estrategia;
    }

    ejecutar(): void {
        this.estrategia.analizar();
    }
}

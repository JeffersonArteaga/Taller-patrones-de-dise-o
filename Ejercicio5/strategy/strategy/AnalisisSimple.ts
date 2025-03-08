import { IEstrategia } from "./IEstrategia";

export abstract class AnalisisSimple implements IEstrategia {

    analizar(): void {
        this.iniciar();
        this.saltarZip();
        this.detener();
    }

    abstract iniciar(): void;

    abstract saltarZip(): void;

    abstract detener(): void;
}

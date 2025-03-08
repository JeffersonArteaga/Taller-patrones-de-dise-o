import { IEstrategia } from "./IEstrategia";

export abstract class AnalisisAvanzado implements IEstrategia {

    analizar(): void {
        this.iniciar();
        this.analizarMemoria();
        this.analizarKeyloggers();
        this.analizarRootKits();
        this.descomprimirZip();
        this.detener();
    }

    abstract iniciar(): void;

    abstract analizarMemoria(): void;

    abstract analizarKeyloggers(): void;
    
    abstract analizarRootKits(): void;
    
    abstract descomprimirZip(): void;

    abstract detener(): void;
}

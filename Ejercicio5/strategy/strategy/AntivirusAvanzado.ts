import { AnalisisAvanzado } from "./AnalisisAvanzado";

export class AntivirusAvanzado extends AnalisisAvanzado {

    iniciar(): void {
        console.log("Antivirus Avanzado - Análisis avanzado iniciado");
    }

    async analizarMemoria(): Promise<void> {
        console.log("Analizando Memoria RAM...");
        await this.delay(1000);
    }

    async analizarKeyloggers(): Promise<void> {
        console.log("Analizando en busca de Keyloggers...");
        await this.delay(1000);
    }

    async analizarRootKits(): Promise<void> {
        console.log("Analizando en busca de RootKits...");
        await this.delay(1500);
    }

    async descomprimirZip(): Promise<void> {
        console.log("Analizando archivos zip...");
        await this.delay(2000);
    }

    detener(): void {
        console.log("Antivirus Avanzado - Análisis avanzado finalizado");
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

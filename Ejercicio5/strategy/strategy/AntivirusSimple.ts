import { AnalisisSimple } from "./AnalisisSimple";

export class AntivirusSimple extends AnalisisSimple {

    iniciar(): void {
        console.log("Antivirus Simple - Análisis simple iniciado");
    }

    async saltarZip(): Promise<void> {
        try {
            console.log("Analizando...");
            await this.delay(2500);
            console.log("No se pudo analizar archivos con extensión '.zip'");
        } catch (error) {
            console.error("Error en el análisis:", error);
        }
    }

    detener(): void {
        console.log("Antivirus Simple - Análisis simple finalizado");
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

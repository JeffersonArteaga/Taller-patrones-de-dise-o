import { Contexto } from "./strategy/Contexto";
import { AntivirusAvanzado } from "./strategy/AntivirusAvanzado";

const contexto = new Contexto(new AntivirusAvanzado());
contexto.ejecutar();

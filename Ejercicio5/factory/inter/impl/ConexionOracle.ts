import { IConexion } from "../IConexion";

export class ConexionOracle implements IConexion {
  private host: string;
  private puerto: string;
  private usuario: string;
  private contrasena: string;

  constructor() {
      this.host = "localhost";
      this.puerto = "1521";
      this.usuario = "admin";
      this.contrasena = "123";
  }

  conectar(): void {
      console.log("Se conectó a Oracle");
  }

  desconectar(): void {
      console.log("Se desconectó de Oracle");
  }

  toString(): string {
      return `ConexionOracle [host=${this.host}, puerto=${this.puerto}, usuario=${this.usuario}, contrasena=${this.contrasena}]`;
  }
}

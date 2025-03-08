import { IConexion } from "../IConexion";

export class ConexionPostgreSQL implements IConexion {
  private host: string;
  private puerto: string;
  private usuario: string;
  private contrasena: string;

  constructor() {
      this.host = "localhost";
      this.puerto = "5433";
      this.usuario = "postgres";
      this.contrasena = "123";
  }

  conectar(): void {
      console.log("Se conectó a PostgreSQL");
  }

  desconectar(): void {
      console.log("Se desconectó de PostgreSQL");
  }

  toString(): string {
      return `ConexionPostgreSQL [host=${this.host}, puerto=${this.puerto}, usuario=${this.usuario}, contrasena=${this.contrasena}]`;
  }
}

import { IConexion } from "../IConexion";

export class ConexionMySQL implements IConexion {
  private host: string;
  private puerto: string;
  private usuario: string;
  private contrasena: string;

  constructor() {
      this.host = "localhost";
      this.puerto = "3306";
      this.usuario = "root";
      this.contrasena = "123";
  }

  conectar(): void {
      console.log("Se conectó a MySQL");
  }

  desconectar(): void {
      console.log("Se desconectó de MySQL");
  }

  toString(): string {
      return `ConexionMySQL [host=${this.host}, puerto=${this.puerto}, usuario=${this.usuario}, contrasena=${this.contrasena}]`;
  }
}

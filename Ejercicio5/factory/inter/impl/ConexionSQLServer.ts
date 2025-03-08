import { IConexion } from "../IConexion";

export class ConexionSQLServer implements IConexion {
  private host: string;
  private puerto: string;
  private usuario: string;
  private contrasena: string;

  constructor() {
      this.host = "localhost";
      this.puerto = "1433";
      this.usuario = "postgres";
      this.contrasena = "123";
  }

  conectar(): void {
      console.log("Se conectó a SQLServer");
  }

  desconectar(): void {
      console.log("Se desconectó de SQLServer");
  }

  getHost(): string {
      return this.host;
  }

  setHost(host: string): void {
      this.host = host;
  }

  getPuerto(): string {
      return this.puerto;
  }

  setPuerto(puerto: string): void {
      this.puerto = puerto;
  }

  getUsuario(): string {
      return this.usuario;
  }

  setUsuario(usuario: string): void {
      this.usuario = usuario;
  }

  getContrasena(): string {
      return this.contrasena;
  }

  setContrasena(contrasena: string): void {
      this.contrasena = contrasena;
  }
}

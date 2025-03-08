import { IConexion } from "../IConexion";

export class ConexionVacia implements IConexion {
  conectar(): void {
      console.log("NO SE ESPECIFICÓ PROVEEDOR");
  }

  desconectar(): void {
      console.log("NO SE ESPECIFICÓ PROVEEDOR");
  }
}

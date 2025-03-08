import { IConexion } from "./inter/IConexion";
import { ConexionMySQL } from "./inter/impl/ConexionMySQL";
import { ConexionOracle } from "./inter/impl/ConexionOracle";
import { ConexionPostgreSQL } from "./inter/impl/ConexionPostgreSQL";
import { ConexionSQLServer } from "./inter/impl/ConexionSQLServer";
import { ConexionVacia } from "./inter/impl/ConexionVacia";

export class ConexionFabrica {
  getConexion(motor: string | null): IConexion {
      if (!motor) {
          return new ConexionVacia();
      }

      switch (motor.toUpperCase()) {
          case "MYSQL":
              return new ConexionMySQL();
          case "ORACLE":
              return new ConexionOracle();
          case "POSTGRE":
              return new ConexionPostgreSQL();
          case "SQL":
              return new ConexionSQLServer();
          default:
              return new ConexionVacia();
      }
  }
}

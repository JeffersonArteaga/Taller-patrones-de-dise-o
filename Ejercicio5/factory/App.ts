import { IConexion } from "./inter/IConexion";
import { ConexionFabrica } from "./ConexionFabrica";

class App {
    static main(): void {
        const fabrica = new ConexionFabrica();

        const cx1: IConexion = fabrica.getConexion("ORACLE");
        cx1.conectar();
        cx1.desconectar();

        const cx2: IConexion = fabrica.getConexion("MYSQL");
        cx2.conectar();
        cx2.desconectar();

        const cx3: IConexion = fabrica.getConexion("H2");
        cx3.conectar();
        cx3.desconectar();
    }
}

App.main();

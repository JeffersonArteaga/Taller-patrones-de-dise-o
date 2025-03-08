import { CheckFacade } from "./facade/CheckFacade";

class App {
    static main(): void {
        const cliente1 = new CheckFacade();
        cliente1.buscar("02/07/2018", "08/07/2018", "Lima", "Cancún");

        const cliente2 = new CheckFacade();
        cliente2.buscar("02/07/2018", "08/07/2018", "Lima", "Quito");
    }
}

App.main();

export class AvionAPI {
  buscarVuelos(fechaIda: string, fechaVuelta: string, origen: string, destino: string): void {
      console.log("==============================");
      console.log(`Vuelos encontrados para ${destino} desde ${origen}`);
      console.log(`Fecha IDA: ${fechaIda} Fecha Vuelta: ${fechaVuelta}`);
      console.log("==============================");
  }
}

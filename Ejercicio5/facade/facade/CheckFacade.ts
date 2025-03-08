import { AvionAPI } from "../api/AvionAPI";
import { HotelAPI } from "../api/HotelAPI";

export class CheckFacade {
  private avionAPI: AvionAPI;
  private hotelAPI: HotelAPI;

  constructor() {
      this.avionAPI = new AvionAPI();
      this.hotelAPI = new HotelAPI();
  }

  buscar(fechaIda: string, fechaVuelta: string, origen: string, destino: string): void {
      this.avionAPI.buscarVuelos(fechaIda, fechaVuelta, origen, destino);
      this.hotelAPI.buscarHoteles(fechaIda, fechaVuelta, origen, destino);
  }
}
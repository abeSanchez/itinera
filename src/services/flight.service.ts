import { Injectable } from '@angular/core';

@Injectable()
export class FlightService {
  flights: any;

  constructor(){

  }

  setFlights(flights) {
    this.flights = flights;
  }

  getFlights() {
    return this.flights;
  }


}

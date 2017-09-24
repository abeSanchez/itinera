import { Injectable } from '@angular/core';

@Injectable()
export class TripService {
  trip: any;

  constructor(){

  }

  setTrip(trip) {
    this.trip = trip;
  }

  getTrip() {
    return this.trip;
  }


}

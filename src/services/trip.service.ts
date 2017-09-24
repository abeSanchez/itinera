import { Injectable } from '@angular/core';

@Injectable()
export class TripService {
  trip: any;
  selected: any;

  constructor(){

  }

  setTrip(trip) {
    this.trip = trip;
  }

  getTrip() {
    return this.trip;
  }

  getSelected() {
    return this.selected;
  }

  setSelected(selected) {
    this.selected = selected;
  }


}

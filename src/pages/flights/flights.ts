import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlightService } from '../../services/flight.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html'
})
export class FlightsPage {

  flights: any;
  dates: any[] = [];
  dates2: any[] = [];

  constructor(private flightService: FlightService, public navCtrl: NavController) {

  }

  ionViewCanEnter() {
    this.flights = this.flightService.getFlights();
    this.getDates();
    this.getDates2();
  }

  getDates2() {
    for(var i = 0; i < this.flights.length; i++) {
      var day, month, year, time;

      day = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(8, 10)
      month = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(5, 7)
      year = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(0, 4)
      time = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(11, 16)

      if (month == 1) {
        month = "JAN";
      }
      if (month == 2) {
        month = "FEB";
      }
      if (month == 3) {
        month = "MAR";
      }
      if (month == 4) {
        month = "APR";
      }
      if (month == 5) {
        month = "MAY";
      }
      if (month == 6) {
        month = "JUN";
      }
      if (month == 7) {
        month = "JUL";
      }
      if (month == 8) {
        month = "AUG";
      }
      if (month == 9) {
        month = "SEP";
      }
      if (month == 10) {
        month = "OCT";
      }
      if (month == 11) {
        month = "NOV";
      }
      if (month == 12) {
        month = "DEC";
      }

      this.dates2.push({ "day": day, "month": month, "year": year, "time": time })

    }
  }

  getDates() {
    for(var i = 0; i < this.flights.length; i++) {
      var day, month, year, time;

      day = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(8, 10)
      month = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(5, 7)
      year = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(0, 4)
      time = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(11, 16)

      if (month == 1) {
        month = "JAN";
      }
      if (month == 2) {
        month = "FEB";
      }
      if (month == 3) {
        month = "MAR";
      }
      if (month == 4) {
        month = "APR";
      }
      if (month == 5) {
        month = "MAY";
      }
      if (month == 6) {
        month = "JUN";
      }
      if (month == 7) {
        month = "JUL";
      }
      if (month == 8) {
        month = "AUG";
      }
      if (month == 9) {
        month = "SEP";
      }
      if (month == 10) {
        month = "OCT";
      }
      if (month == 11) {
        month = "NOV";
      }
      if (month == 12) {
        month = "DEC";
      }

      this.dates.push({ "day": day, "month": month, "year": year, "time": time })

    }
  }

}

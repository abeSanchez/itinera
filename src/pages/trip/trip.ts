import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlightService } from '../../services/flight.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripPage {

  trip: any;
  dates: any[] = [];
  selectedDay: any[] = [];
  i: any;

  constructor(private tripService: TripService, public navCtrl: NavController) {

  }

  ionViewCanEnter() {
    this.trip = this.tripService.getTrip();
    this.getDates();
    this.getSelected();
    this.i = 0;
  }

  ionViewWillEnter() {
    var d = document.getElementsByClassName('day-number');
    d[0].setAttribute("style", "color: #26C485");
    this.selectedDay[0] = true;
    this.i = 0;
    for (var i = 1; i < this.selectedDay.length; i++) {
      d[i].setAttribute("style", "color: grey");
      this.selectedDay[i] = false;
    }
  }

  changeDate(date) {
    var d = document.getElementsByClassName('day-number');
    for (var i = 0; i < this.selectedDay.length; i++) {
      d[i].setAttribute("style", "color: grey");
      this.selectedDay[i] = false;
    }
    for (var i = 0; i < this.selectedDay.length; i++) {
      if (d[i].innerHTML == date.day) {
        d[i].setAttribute("style", "color: #26C485");
        this.selectedDay[i] = true;
        this.i = i;
        break;
      }
    }
  }

  getSelected() {
      this.selectedDay.push(true)
      for(var i = 1; i < this.trip.length; i++) {
        this.selectedDay.push(false);
      }
  }

  getDates() {
    for(var i = 0; i < this.trip.length; i++) {
      var day, year, month;
      day = this.trip[i].date.substring(8, 10);
      month = this.trip[i].date.substring(5, 7);
      year = this.trip[i].date.substring(0, 4);

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




      this.dates.push({"day": day, "month": month, "year": year})
    }
  }

}

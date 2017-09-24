import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'page-attract',
  templateUrl: 'attract.html',
})
export class AttractPage {

  place: any;

  constructor(private tripService: TripService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
      this.place = this.tripService.getSelected();
      console.log(this.place)
  }

}

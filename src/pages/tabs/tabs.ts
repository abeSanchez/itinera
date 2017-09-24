import { Component } from '@angular/core';

import { TripPage } from '../trip/trip';
import { FlightsPage } from '../flights/flights';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FlightsPage;
  tab2Root = TripPage;

  constructor() {

  }
}

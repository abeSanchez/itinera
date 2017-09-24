import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TripPage } from '../pages/trip/trip';
import { FlightsPage } from '../pages/flights/flights';
import { TabsPage } from '../pages/tabs/tabs';
import { AfoodPage } from '../pages/afood/afood';
import { AttractPage } from '../pages/attract/attract';
import { BreakfPage } from '../pages/breakf/breakf';
import { FlightService } from '../services/flight.service';
import { TripService } from '../services/trip.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartPage } from '../pages/start/start'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TripPage,
    FlightsPage,
    TabsPage,
    StartPage,
    AfoodPage,
    BreakfPage,
    AttractPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TripPage,
    FlightsPage,
    TabsPage,
    StartPage,
    AfoodPage,
    BreakfPage,
    AttractPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlightService,
    TripService
  ]
})
export class AppModule {}

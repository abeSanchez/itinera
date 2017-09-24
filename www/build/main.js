webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flight_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_trip_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StartPage = (function () {
    function StartPage(http, flightService, tripService, navCtrl, navParams) {
        this.http = http;
        this.flightService = flightService;
        this.tripService = tripService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setData();
        setTimeout(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]); }, 3000);
    };
    StartPage.prototype.setData = function () {
        var _this = this;
        var url = 'http://ee895040.ngrok.io/api/get_data';
        url.replace(/ /g, "%20");
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.tripService.setTrip(data.result);
            console.log(data.result);
            console.log(data.flights);
            _this.flightService.setFlights(data.flights);
        }, function (err) {
            console.log("Failed to get from API");
            var data = { "flights": [{ "kind": "qpxexpress#tripOption", "saleTotal": "USD1369.20", "id": "33yQdPgqgjTLrMO8LbJz0T01E", "slice": [{ "kind": "qpxexpress#sliceInfo", "duration": 63, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 63, "flight": { "carrier": "UA", "number": "1429" }, "id": "GgQZviCWySPPg+8-", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 9, "marriedSegmentGroup": "0", "leg": [{ "kind": "qpxexpress#legInfo", "id": "LnD0Kyb0h2liQJuN", "aircraft": "319", "arrivalTime": "2017-09-26T16:38-05:00", "departureTime": "2017-09-26T15:35-05:00", "origin": "IAH", "destination": "AUS", "originTerminal": "C", "duration": 63, "onTimePerformance": 60, "mileage": 139, "secure": true }] }] }, { "kind": "qpxexpress#sliceInfo", "duration": 66, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 66, "flight": { "carrier": "UA", "number": "327" }, "id": "GXT8VZw8cHIlR0m0", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 9, "marriedSegmentGroup": "1", "leg": [{ "kind": "qpxexpress#legInfo", "id": "L0eufFuI80MBS1s+", "aircraft": "738", "arrivalTime": "2017-09-28T10:24-05:00", "departureTime": "2017-09-28T09:18-05:00", "origin": "AUS", "destination": "IAH", "destinationTerminal": "C", "duration": 66, "onTimePerformance": 70, "mileage": 139, "secure": true }] }] }], "pricing": [{ "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GgQZviCWySPPg+8-" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GXT8VZw8cHIlR0m0" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "adultCount": 2 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "ADT", "refundable": true }, { "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GgQZviCWySPPg+8-" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GXT8VZw8cHIlR0m0" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "childCount": 1 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "CNN", "refundable": true }] }, { "kind": "qpxexpress#tripOption", "saleTotal": "USD1369.20", "id": "33yQdPgqgjTLrMO8LbJz0T00G", "slice": [{ "kind": "qpxexpress#sliceInfo", "duration": 54, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 54, "flight": { "carrier": "UA", "number": "1439" }, "id": "G8epNRzo2d0yL+S6", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 9, "marriedSegmentGroup": "0", "leg": [{ "kind": "qpxexpress#legInfo", "id": "LYhbdZ9R+9CSwV4w", "aircraft": "739", "arrivalTime": "2017-09-26T20:54-05:00", "departureTime": "2017-09-26T20:00-05:00", "origin": "IAH", "destination": "AUS", "originTerminal": "C", "duration": 54, "onTimePerformance": 30, "mileage": 139, "secure": true }] }] }, { "kind": "qpxexpress#sliceInfo", "duration": 60, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 60, "flight": { "carrier": "UA", "number": "689" }, "id": "GynW4pAYsfC2-p5p", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 9, "marriedSegmentGroup": "1", "leg": [{ "kind": "qpxexpress#legInfo", "id": "LeRpZRUN4FZuKVe1", "aircraft": "739", "arrivalTime": "2017-09-28T07:55-05:00", "departureTime": "2017-09-28T06:55-05:00", "origin": "AUS", "destination": "IAH", "destinationTerminal": "C", "duration": 60, "onTimePerformance": 60, "mileage": 139, "secure": true }] }] }], "pricing": [{ "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GynW4pAYsfC2-p5p" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "G8epNRzo2d0yL+S6" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "adultCount": 2 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "ADT", "refundable": true }, { "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GynW4pAYsfC2-p5p" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "G8epNRzo2d0yL+S6" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "childCount": 1 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "CNN", "refundable": true }] }, { "kind": "qpxexpress#tripOption", "saleTotal": "USD1369.20", "id": "33yQdPgqgjTLrMO8LbJz0T00R", "slice": [{ "kind": "qpxexpress#sliceInfo", "duration": 54, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 54, "flight": { "carrier": "UA", "number": "6221" }, "id": "GkBdTNZ-V8oz7Sd4", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 9, "marriedSegmentGroup": "0", "leg": [{ "kind": "qpxexpress#legInfo", "id": "LzHHrMEmpi-yCF3L", "aircraft": "E7W", "arrivalTime": "2017-09-26T23:39-05:00", "departureTime": "2017-09-26T22:45-05:00", "origin": "IAH", "destination": "AUS", "originTerminal": "B", "duration": 54, "operatingDisclosure": "OPERATED BY MESA AIRLINES DBA UNITED EXPRESS", "mileage": 139, "secure": true }] }] }, { "kind": "qpxexpress#sliceInfo", "duration": 64, "segment": [{ "kind": "qpxexpress#segmentInfo", "duration": 64, "flight": { "carrier": "UA", "number": "6168" }, "id": "G8VszLuVDd5h4Jgw", "cabin": "COACH", "bookingCode": "E", "bookingCodeCount": 4, "marriedSegmentGroup": "1", "leg": [{ "kind": "qpxexpress#legInfo", "id": "LV22x0wpwrWJs-tl", "aircraft": "E7W", "arrivalTime": "2017-09-28T15:33-05:00", "departureTime": "2017-09-28T14:29-05:00", "origin": "AUS", "destination": "IAH", "destinationTerminal": "B", "duration": 64, "operatingDisclosure": "OPERATED BY MESA AIRLINES DBA UNITED EXPRESS", "mileage": 139, "secure": true }] }] }], "pricing": [{ "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "G8VszLuVDd5h4Jgw" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GkBdTNZ-V8oz7Sd4" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "adultCount": 2 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "ADT", "refundable": true }, { "kind": "qpxexpress#pricingInfo", "fare": [{ "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "HOU", "destination": "AUS", "basisCode": "EAA0AKEY" }, { "kind": "qpxexpress#fareInfo", "id": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "carrier": "UA", "origin": "AUS", "destination": "HOU", "basisCode": "EAA0AKEY" }], "segmentPricing": [{ "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "G8VszLuVDd5h4Jgw" }, { "kind": "qpxexpress#segmentPricing", "fareId": "Asm7wIMoFZ6KcJfg11AR41o1HWivhQRJno41ZVgHaEFA", "segmentId": "GkBdTNZ-V8oz7Sd4" }], "baseFareTotal": "USD398.14", "saleFareTotal": "USD398.14", "saleTaxTotal": "USD58.26", "saleTotal": "USD456.40", "passengers": { "kind": "qpxexpress#passengerCounts", "childCount": 1 }, "tax": [{ "kind": "qpxexpress#taxInfo", "id": "US_001", "chargeType": "GOVERNMENT", "code": "US", "country": "US", "salePrice": "USD29.86" }, { "kind": "qpxexpress#taxInfo", "id": "AY_001", "chargeType": "GOVERNMENT", "code": "AY", "country": "US", "salePrice": "USD11.20" }, { "kind": "qpxexpress#taxInfo", "id": "XF", "chargeType": "GOVERNMENT", "code": "XF", "country": "US", "salePrice": "USD9.00" }, { "kind": "qpxexpress#taxInfo", "id": "ZP", "chargeType": "GOVERNMENT", "code": "ZP", "country": "US", "salePrice": "USD8.20" }], "fareCalculation": "HOU UA AUS 199.07EAA0AKEY UA HOU 199.07EAA0AKEY USD 398.14 END ZP IAH AUS XT 29.86US 8.20ZP 11.20AY 9.00XF IAH4.50 AUS4.50", "latestTicketingTime": "2017-09-25T23:59-04:00", "ptc": "CNN", "refundable": true }] }], "result": [{ "date": "2017-09-27", "breakfast": [{ "id": "blenders-and-bowls-downtown-austin", "name": "Blenders and Bowls - Downtown", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7HX0bpxePnwV0mTLTHLb3A/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/blenders-and-bowls-downtown-austin?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 262, "categories": [{ "alias": "acaibowls", "title": "Acai Bowls" }, { "alias": "breakfast_brunch", "title": "Breakfast & Brunch" }, { "alias": "healthmarkets", "title": "Health Markets" }], "rating": 4.5, "coordinates": { "latitude": 30.265971, "longitude": -97.741606 }, "transactions": [], "price": "$$", "location": { "address1": "206 E 4th St", "address2": "", "address3": "", "city": "Austin", "zip_code": "78701", "country": "US", "state": "TX", "display_address": ["206 E 4th St", "Austin, TX 78701"] }, "phone": "+15125025184", "display_phone": "(512) 502-5184", "distance": 4623.8650821579995 }, { "id": "my-name-is-joe-coffee-austin-2", "name": "My Name Is Joe Coffee", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Vk93U_zzr-hvp-oOPGKF_g/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/my-name-is-joe-coffee-austin-2?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 19, "categories": [{ "alias": "coffee", "title": "Coffee & Tea" }, { "alias": "breakfast_brunch", "title": "Breakfast & Brunch" }, { "alias": "foodtrucks", "title": "Food Trucks" }], "rating": 5.0, "coordinates": { "latitude": 30.2678165571932, "longitude": -97.7441127505691 }, "transactions": [], "price": "$", "location": { "address1": "503 Colorado St", "address2": "", "address3": null, "city": "Austin", "zip_code": "78701", "country": "US", "state": "TX", "display_address": ["503 Colorado St", "Austin, TX 78701"] }, "phone": "+15127777777", "display_phone": "(512) 777-7777", "distance": 4352.853191762 }, { "id": "kerbey-lane-cafe-austin-4", "name": "Kerbey Lane Cafe", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/kb-FHD50CI9yv6u6u_kl9A/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/kerbey-lane-cafe-austin-4?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 983, "categories": [{ "alias": "tex-mex", "title": "Tex-Mex" }, { "alias": "breakfast_brunch", "title": "Breakfast & Brunch" }, { "alias": "cafes", "title": "Cafes" }], "rating": 4.0, "coordinates": { "latitude": 30.30803, "longitude": -97.75047 }, "transactions": [], "price": "$$", "location": { "address1": "3704 Kerbey Ln", "address2": "", "address3": "", "city": "Austin", "zip_code": "78731", "country": "US", "state": "TX", "display_address": ["3704 Kerbey Ln", "Austin, TX 78731"] }, "phone": "+15124511436", "display_phone": "(512) 451-1436", "distance": 762.5403112383999 }], "attraction1": [{ "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "4c16cd03955976b01a29a5f6", "name": "Uchiko", "contact": { "phone": "5129164808", "formattedPhone": "(512) 916-4808", "twitter": "uchikoaustin", "facebook": "118246848188456", "facebookUsername": "uchikoaustin", "facebookName": "Uchiko" }, "location": { "address": "4200 N Lamar Blvd", "lat": 30.310775023080804, "lng": -97.73986401566145, "labeledLatLngs": [{ "label": "display", "lat": 30.310775023080804, "lng": -97.73986401566145 }], "postalCode": "78756", "cc": "US", "city": "Austin", "state": "TX", "country": "United States", "formattedAddress": ["4200 N Lamar Blvd", "Austin, TX 78756", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d111941735", "name": "Japanese Restaurant", "pluralName": "Japanese Restaurants", "shortName": "Japanese", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/food/japanese_", "suffix": ".png" }, "primary": true }], "verified": true, "stats": { "checkinsCount": 11341, "usersCount": 6740, "tipCount": 174 }, "url": "http://www.uchirestaurants.com", "price": { "tier": 4, "message": "Very Expensive", "currency": "$" }, "hasMenu": true, "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 566, "menu": { "type": "Menu", "label": "Menu", "anchor": "View Menu", "url": "https://foursquare.com/v/uchiko/4c16cd03955976b01a29a5f6/menu", "mobileUrl": "https://foursquare.com/v/4c16cd03955976b01a29a5f6/device_menu" }, "allowMenuUrlEdit": true, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 5:00 PM", "richStatus": { "entities": [], "text": "Closed until 5:00 PM" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "storeId": "", "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/UCsZ643ueIGTBYqWuZ27iO8Z-ukBdPYwes7FgksuBWU.jpg" }, "tips": [{ "id": "51c0e151498efff55c45bfff", "createdAt": 1371595089, "text": "A trip to Uchiko is a treat for the senses, with creative flavor pairings in dishes like rosemary-smoked duck with candied citrus or pork-belly-and-egg sushi. Decor is almost too beautiful to look at.", "type": "user", "url": "http://www.austinchronicle.com/food/2010-11-12/uchiko/", "canonicalUrl": "https://foursquare.com/item/51c0e151498efff55c45bfff", "photo": { "id": "51c0e1532fc63388a46ab3b3", "createdAt": 1371595091, "source": { "name": "Foursquare Web", "url": "https://foursquare.com" }, "prefix": "https://igx.4sqi.net/img/general/", "suffix": "/45840869_TDz5qXFXY7MKQQgDQsV_8cK06O81Xdta-AHYiwgu0YA.jpg", "width": 600, "height": 901, "visibility": "public" }, "photourl": "https://igx.4sqi.net/img/general/original/45840869_TDz5qXFXY7MKQQgDQsV_8cK06O81Xdta-AHYiwgu0YA.jpg", "likes": { "count": 14, "groups": [], "summary": "14 likes" }, "logView": true, "agreeCount": 14, "disagreeCount": 0, "todo": { "count": 6 }, "user": { "id": "45840869", "firstName": "Austin Chronicle", "gender": "none", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/45840869-0XZMRRJZY144PJHL.gif" }, "type": "page" } }], "referralId": "e-0-4c16cd03955976b01a29a5f6-17" }, { "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "441812dbf964a52015311fe3", "name": "Barton Springs Pool", "contact": { "phone": "5124769044", "formattedPhone": "(512) 476-9044", "twitter": "austintexasgov", "facebook": "160463252374", "facebookUsername": "austintexasgov", "facebookName": "Austin, Texas - Your City Government" }, "location": { "address": "2101 Barton Springs Rd", "crossStreet": "at William Barton Dr", "lat": 30.263558804964152, "lng": -97.7699528882697, "postalCode": "78704", "cc": "US", "city": "Austin", "state": "TX", "country": "United States", "formattedAddress": ["2101 Barton Springs Rd (at William Barton Dr)", "Austin, TX 78704", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d15e941735", "name": "Pool", "pluralName": "Pools", "shortName": "Pool", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/pool_", "suffix": ".png" }, "primary": true }], "verified": false, "stats": { "checkinsCount": 25078, "usersCount": 14940, "tipCount": 197 }, "url": "http://austintexas.gov/department/barton-springs-pool", "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 1024, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 5:00 AM", "richStatus": { "entities": [], "text": "Closed until 5:00 AM" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "storeId": "", "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/201392_kbs6eO2j4X_SkcKmwIgP5OoxVlWjcIZFT8hE4SqUH5k.jpg" }, "tips": [{ "id": "4bbcaadb70c603bb220a97b4", "createdAt": 1270655707, "text": "Three acres in size, the pool is fed from under ground springs and is on average 68 degrees year round. Over the years it has drawn people from all walks of life.", "type": "user", "canonicalUrl": "https://foursquare.com/item/4bbcaadb70c603bb220a97b4", "likes": { "count": 41, "groups": [], "summary": "41 likes" }, "logView": true, "agreeCount": 42, "disagreeCount": 0, "todo": { "count": 77 }, "user": { "id": "376887", "firstName": "HISTORY", "gender": "none", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/376887-4KMRMDF4C2IGL1QX.png" }, "type": "chain" } }], "referralId": "e-0-441812dbf964a52015311fe3-16" }, { "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "4d8d295fc1b1721e798b1246", "name": "Veracruz All Natural", "contact": { "phone": "5129811760", "formattedPhone": "(512) 981-1760", "twitter": "veracruztacos", "instagram": "veracruzallnatural", "facebook": "622800261121250", "facebookUsername": "veracruzallnatural", "facebookName": "Veracruz All Natural" }, "location": { "address": "1704 E Cesar Chavez St", "lat": 30.25767484595112, "lng": -97.72567260781092, "labeledLatLngs": [{ "label": "display", "lat": 30.25767484595112, "lng": -97.72567260781092 }], "postalCode": "78702", "cc": "US", "city": "Austin", "state": "TX", "country": "United States", "formattedAddress": ["1704 E Cesar Chavez St", "Austin, TX 78702", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d151941735", "name": "Taco Place", "pluralName": "Taco Places", "shortName": "Tacos", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/food/taco_", "suffix": ".png" }, "primary": true }], "verified": false, "stats": { "checkinsCount": 2821, "usersCount": 1690, "tipCount": 78 }, "url": "http://veracruztacos.com", "price": { "tier": 1, "message": "Cheap", "currency": "$" }, "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 311, "menu": { "type": "Menu", "label": "Menu", "anchor": "View Menu", "url": "http://veracruztacos.com/img/cesar_chavez.pdf", "mobileUrl": "http://veracruztacos.com/img/cesar_chavez.pdf", "externalUrl": "http://veracruztacos.com/img/cesar_chavez.pdf" }, "allowMenuUrlEdit": true, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 6:00 AM Monday", "richStatus": { "entities": [], "text": "Closed until 6:00 AM Monday" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/20714_iRuEpDTZUMQnjP3VA_wAtosyr_NTW-SSU2HSOpAR5N0.jpg" }, "tips": [{ "id": "5506ff36498ee8f7d0c2da79", "createdAt": 1426521910, "text": "This unassuming taco truck has some of the BEST mexican snacks on offer. I stumbled onto it using my Supper app: http://supper.mx/places/veracruz-all-natural-austin/", "entities": [{ "indices": [113, 165], "type": "url", "object": { "url": "http://supper.mx/places/veracruz-all-natural-austin/" } }], "type": "user", "canonicalUrl": "https://foursquare.com/item/5506ff36498ee8f7d0c2da79", "likes": { "count": 10, "groups": [], "summary": "10 likes" }, "logView": true, "agreeCount": 10, "disagreeCount": 0, "todo": { "count": 0 }, "user": { "id": "121776612", "firstName": "Oskar", "lastName": "Wildly", "gender": "male", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/121776612-P5WWFC4VFKCV1EIL.png" } } }], "referralId": "e-0-4d8d295fc1b1721e798b1246-15" }], "lunch": [{ "business": { "id": "vans-banh-mi-austin", "name": "Van's Banh Mi", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6nv3mwGQkD00TE2H-V_yjg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/vans-banh-mi-austin?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 90, "categories": [{ "alias": "vietnamese", "title": "Vietnamese" }, { "alias": "sandwiches", "title": "Sandwiches" }, { "alias": "foodtrucks", "title": "Food Trucks" }], "rating": 5.0, "coordinates": { "latitude": 30.317449, "longitude": -97.721046 }, "transactions": [], "price": "$", "location": { "address1": "201 E 53rd St", "address2": "", "address3": null, "city": "Austin", "zip_code": "78751", "country": "US", "state": "TX", "display_address": ["201 E 53rd St", "Austin, TX 78751"] }, "phone": "+15125931615", "display_phone": "(512) 593-1615", "distance": 3776.582494836 } }, { "business": { "id": "the-pizza-press-austin", "name": "The Pizza Press", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/KuZ6gp4-Xcr4MXHXKZkZJA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/the-pizza-press-austin?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 55, "categories": [{ "alias": "pizza", "title": "Pizza" }, { "alias": "salad", "title": "Salad" }], "rating": 4.0, "coordinates": { "latitude": 30.29072, "longitude": -97.74201 }, "transactions": [], "price": "$", "location": { "address1": "404 W 26th St", "address2": null, "address3": "", "city": "Austin", "zip_code": "78705", "country": "US", "state": "TX", "display_address": ["404 W 26th St", "Austin, TX 78705"] }, "phone": "+15128080474", "display_phone": "(512) 808-0474", "distance": 2203.744257244 } }, { "business": { "id": "modern-market-austin-2", "name": "Modern Market", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/m3idzYTwloSsNwmo_WlIFA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/modern-market-austin-2?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 37, "categories": [{ "alias": "salad", "title": "Salad" }, { "alias": "breakfast_brunch", "title": "Breakfast & Brunch" }, { "alias": "sandwiches", "title": "Sandwiches" }], "rating": 4.0, "coordinates": { "latitude": 30.2736933530259, "longitude": -97.8001226484776 }, "transactions": [], "price": "$$", "location": { "address1": "3201 Bee Cave Rd", "address2": "Ste 144", "address3": null, "city": "Austin", "zip_code": "78746", "country": "US", "state": "TX", "display_address": ["3201 Bee Cave Rd", "Ste 144", "Austin, TX 78746"] }, "phone": "+15128070290", "display_phone": "(512) 807-0290", "distance": 5368.13703476 } }], "attraction2": [{ "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "4cb5e045e262b60c46cb6ae0", "name": "Hopdoddy Burger Bar", "contact": { "phone": "5122437505", "formattedPhone": "(512) 243-7505", "twitter": "hopdoddy", "facebook": "146178238742003", "facebookUsername": "hopdoddy", "facebookName": "Hopdoddy Burger Bar" }, "location": { "address": "1400 S Congress Ave", "crossStreet": "btwn Gibson & Elizabeth", "lat": 30.249540168503078, "lng": -97.74991035461426, "labeledLatLngs": [{ "label": "display", "lat": 30.249540168503078, "lng": -97.74991035461426 }], "postalCode": "78704", "cc": "US", "city": "Austin", "state": "TX", "country": "United States", "formattedAddress": ["1400 S Congress Ave (btwn Gibson & Elizabeth)", "Austin, TX 78704", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d16c941735", "name": "Burger Joint", "pluralName": "Burger Joints", "shortName": "Burgers", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_", "suffix": ".png" }, "primary": true }], "verified": true, "stats": { "checkinsCount": 25666, "usersCount": 15083, "tipCount": 418 }, "url": "http://hopdoddy.com/", "price": { "tier": 2, "message": "Moderate", "currency": "$" }, "hasMenu": true, "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 1493, "menu": { "type": "Menu", "label": "Menu", "anchor": "View Menu", "url": "https://foursquare.com/v/hopdoddy-burger-bar/4cb5e045e262b60c46cb6ae0/menu", "mobileUrl": "https://foursquare.com/v/4cb5e045e262b60c46cb6ae0/device_menu" }, "allowMenuUrlEdit": true, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 11:00 AM", "richStatus": { "entities": [], "text": "Closed until 11:00 AM" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/3847291_azLlc2-gd_TXoPS105K3RYo-JjfGTN0_y8Z3ZXf-Hok.jpg" }, "tips": [{ "id": "4ee260610e61689f53e6e5f8", "createdAt": 1323458657, "text": "The key is to sit at the bar. You can order your food and drinks from there. Avoiding the long line and getting your food faster.", "type": "user", "canonicalUrl": "https://foursquare.com/item/4ee260610e61689f53e6e5f8", "likes": { "count": 22, "groups": [], "summary": "22 likes" }, "logView": true, "agreeCount": 21, "disagreeCount": 0, "todo": { "count": 1 }, "user": { "id": "9942596", "firstName": "Jerone", "lastName": "Young", "gender": "male", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/21K3KNSGWHT0T02G.jpg" } } }], "referralId": "e-0-4cb5e045e262b60c46cb6ae0-14" }, { "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "49be75ccf964a520ad541fe3", "name": "Torchy's Tacos", "contact": { "phone": "5129169235", "formattedPhone": "(512) 916-9235", "twitter": "torchystacos", "facebook": "188620089283", "facebookUsername": "TorchysTacos", "facebookName": "Torchy's Tacos" }, "location": { "address": "1311 S 1st St", "crossStreet": "btwn Elizabeth St W & Gibson St W", "lat": 30.250798175866866, "lng": -97.75459115646704, "labeledLatLngs": [{ "label": "display", "lat": 30.250798175866866, "lng": -97.75459115646704 }], "postalCode": "78704", "cc": "US", "city": "Austin", "state": "TX", "country": "United States", "formattedAddress": ["1311 S 1st St (btwn Elizabeth St W & Gibson St W)", "Austin, TX 78704", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d1cb941735", "name": "Food Truck", "pluralName": "Food Trucks", "shortName": "Food Truck", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/food/streetfood_", "suffix": ".png" }, "primary": true }], "verified": true, "stats": { "checkinsCount": 14806, "usersCount": 9597, "tipCount": 218 }, "url": "http://www.torchystacos.com", "price": { "tier": 1, "message": "Cheap", "currency": "$" }, "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 865, "menu": { "type": "Menu", "label": "Menu", "anchor": "View Menu", "url": "http://torchystacos.com/menu/", "mobileUrl": "http://torchystacos.com/menu/", "externalUrl": "http://torchystacos.com/menu/" }, "allowMenuUrlEdit": true, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 8:00 AM", "richStatus": { "entities": [], "text": "Closed until 8:00 AM" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "storeId": "", "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/7501585_Opn1Zv7d238pgPtE_rlt123UInlRg63uFp1oGx4JJ7U.jpg" }, "tips": [{ "id": "4df668ddb3adec5a0b9a3582", "createdAt": 1307994333, "text": "Some of the best tacos in south Texas!", "type": "user", "url": "http://exm.nr/iA97KD", "canonicalUrl": "https://foursquare.com/item/4df668ddb3adec5a0b9a3582", "likes": { "count": 19, "groups": [], "summary": "19 likes" }, "logView": true, "agreeCount": 2, "disagreeCount": 0, "todo": { "count": 0 }, "user": { "id": "5040784", "firstName": "Examiner.com", "gender": "none", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/5BYM2F11UU131MY1.jpg" }, "type": "page" } }], "referralId": "e-0-49be75ccf964a520ad541fe3-13" }, { "reasons": { "count": 0, "items": [{ "summary": "This spot is popular", "type": "general", "reasonName": "globalInteractionReason" }] }, "venue": { "id": "55fb52a3498edd6515d5c74c", "name": "Total Wine & More", "contact": { "phone": "5122573252", "formattedPhone": "(512) 257-3252", "twitter": "totalwine" }, "location": { "address": "11066 Pecan Park Blvd, Ste 117", "lat": 30.469914354508216, "lng": -97.79893845319748, "labeledLatLngs": [{ "label": "display", "lat": 30.469914354508216, "lng": -97.79893845319748 }], "postalCode": "78613", "cc": "US", "city": "Cedar Park", "state": "TX", "country": "United States", "formattedAddress": ["11066 Pecan Park Blvd, Ste 117", "Cedar Park, TX 78613", "United States"] }, "categories": [{ "id": "4bf58dd8d48988d119951735", "name": "Wine Shop", "pluralName": "Wine Shops", "shortName": "Wine Shop", "icon": { "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_wineshop_", "suffix": ".png" }, "primary": true }], "verified": true, "stats": { "checkinsCount": 887, "usersCount": 350, "tipCount": 8 }, "url": "http://www.totalwine.com", "rating": 9.5, "ratingColor": "00B551", "ratingSignals": 113, "allowMenuUrlEdit": true, "beenHere": { "count": 0, "marked": false, "lastCheckinExpiredAt": 0 }, "hours": { "status": "Closed until 10:00 AM Monday", "richStatus": { "entities": [], "text": "Closed until 10:00 AM Monday" }, "isOpen": false, "isLocalHoliday": false }, "photos": { "count": 0, "groups": [] }, "hereNow": { "count": 0, "summary": "Nobody here", "groups": [] }, "photo_url": "https://igx.4sqi.net/img/general/300x500/111198_EQmFUZ6irHO-V0XrA8hxq607CTUWByL7n8wdJoqHl1E.jpg" }, "tips": [{ "id": "56a52007498e48f84a4fac05", "createdAt": 1453662215, "text": "Wow enormous store with huge selection. Split into roughly thirds with wine, spirits, beer. Lots of craft beers. Lots of scotch. Prices seemed fair not amazing.", "type": "user", "canonicalUrl": "https://foursquare.com/item/56a52007498e48f84a4fac05", "likes": { "count": 1, "groups": [], "summary": "1 like" }, "logView": true, "agreeCount": 1, "disagreeCount": 0, "todo": { "count": 0 }, "user": { "id": "14926923", "firstName": "Josh", "lastName": "A", "gender": "male", "photo": { "prefix": "https://igx.4sqi.net/img/user/", "suffix": "/XRKF1XRYWFXTU51U.jpg" } } }], "referralId": "e-0-55fb52a3498edd6515d5c74c-12" }], "dinner": [{ "business": { "id": "true-food-kitchen-austin-2", "name": "True Food Kitchen", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Lde9QTfmskMXGcI_kSh9NA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/true-food-kitchen-austin-2?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 459, "categories": [{ "alias": "newamerican", "title": "American (New)" }, { "alias": "vegan", "title": "Vegan" }, { "alias": "vegetarian", "title": "Vegetarian" }], "rating": 4.5, "coordinates": { "latitude": 30.2672474, "longitude": -97.7520856 }, "transactions": [], "price": "$$", "location": { "address1": "222 West Ave", "address2": "Suite HR100", "address3": null, "city": "Austin", "zip_code": "78701", "country": "US", "state": "TX", "display_address": ["222 West Ave", "Suite HR100", "Austin, TX 78701"] }, "phone": "+15127772430", "display_phone": "(512) 777-2430", "distance": 4249.856075498 } }, { "business": { "id": "cenote-austin-5", "name": "Cenote", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ibaLK5M9FZMIw3ApCjrYoQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/cenote-austin-5?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 26, "categories": [{ "alias": "coffee", "title": "Coffee & Tea" }, { "alias": "tacos", "title": "Tacos" }, { "alias": "newamerican", "title": "American (New)" }], "rating": 4.0, "coordinates": { "latitude": 30.3204456874673, "longitude": -97.6969876885414 }, "transactions": [], "price": "$", "location": { "address1": "6214 Cameron Rd", "address2": "", "address3": null, "city": "Austin", "zip_code": "78723", "country": "US", "state": "TX", "display_address": ["6214 Cameron Rd", "Austin, TX 78723"] }, "phone": "+15128140993", "display_phone": "(512) 814-0993", "distance": 6072.466938836 } }, { "business": { "id": "roaring-fork-austin", "name": "Roaring Fork", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/GexpeoTKEG8XabWcHGjywQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/roaring-fork-austin?adjust_creative=xG42fxLEMi8xqdkTqULFIQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xG42fxLEMi8xqdkTqULFIQ", "review_count": 789, "categories": [{ "alias": "tradamerican", "title": "American (Traditional)" }], "rating": 4.0, "coordinates": { "latitude": 30.2691, "longitude": -97.74195 }, "transactions": [], "price": "$$", "location": { "address1": "701 Congress Ave", "address2": null, "address3": "", "city": "Austin", "zip_code": "78701", "country": "US", "state": "TX", "display_address": ["701 Congress Ave", "Austin, TX 78701"] }, "phone": "+15125830000", "display_phone": "(512) 583-0000", "distance": 4287.567256916 } }] }] };
            console.log(data.flights);
            _this.flightService.setFlights(data.flights);
            _this.tripService.setTrip(data.result);
        });
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\start\start.html"*/'<ion-content>\n<div class="start">\n  <div class="sk-circle">\n  <div class="sk-circle1 sk-child"></div>\n  <div class="sk-circle2 sk-child"></div>\n  <div class="sk-circle3 sk-child"></div>\n  <div class="sk-circle4 sk-child"></div>\n  <div class="sk-circle5 sk-child"></div>\n  <div class="sk-circle6 sk-child"></div>\n  <div class="sk-circle7 sk-child"></div>\n  <div class="sk-circle8 sk-child"></div>\n  <div class="sk-circle9 sk-child"></div>\n  <div class="sk-circle10 sk-child"></div>\n  <div class="sk-circle11 sk-child"></div>\n  <div class="sk-circle12 sk-child"></div>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_flight_service__["a" /* FlightService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_trip_service__["a" /* TripService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _e || Object])
], StartPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=start.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip_trip__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights_flights__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__flights_flights__["a" /* FlightsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__trip_trip__["a" /* TripPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Flights" tabIcon="plane"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Trip" tabIcon="list-box"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__afood_afood__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attract_attract__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breakf_breakf__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripPage = (function () {
    function TripPage(popoverCtrl, tripService, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.tripService = tripService;
        this.navCtrl = navCtrl;
        this.dates = [];
        this.selectedDay = [];
    }
    TripPage.prototype.ionViewCanEnter = function () {
        this.trip = this.tripService.getTrip();
        this.getDates();
        this.getSelected();
        this.i = 0;
    };
    TripPage.prototype.viewBreakfast = function (ev, place) {
        this.tripService.setSelected(place);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__breakf_breakf__["a" /* BreakfPage */]);
        popover.present({
            ev: ev
        });
    };
    TripPage.prototype.viewAttraction = function (ev, place) {
        this.tripService.setSelected(place);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__attract_attract__["a" /* AttractPage */]);
        popover.present({
            ev: ev
        });
    };
    TripPage.prototype.viewAfood = function (ev, place) {
        this.tripService.setSelected(place);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__afood_afood__["a" /* AfoodPage */]);
        popover.present({
            ev: ev
        });
    };
    TripPage.prototype.ionViewWillEnter = function () {
        var d = document.getElementsByClassName('day-number');
        d[0].setAttribute("style", "color: #26C485");
        this.selectedDay[0] = true;
        this.i = 0;
        for (var i = 1; i < this.selectedDay.length; i++) {
            d[i].setAttribute("style", "color: grey");
            this.selectedDay[i] = false;
        }
    };
    TripPage.prototype.changeDate = function (date) {
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
    };
    TripPage.prototype.getSelected = function () {
        this.selectedDay.push(true);
        for (var i = 1; i < this.trip.length; i++) {
            this.selectedDay.push(false);
        }
    };
    TripPage.prototype.getDates = function () {
        for (var i = 0; i < this.trip.length; i++) {
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
            this.dates.push({ "day": day, "month": month, "year": year });
        }
    };
    return TripPage;
}());
TripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\trip\trip.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Advent\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid class="week-calendar" style="overflow-x: auto; white-space:nowrap; width: 30em; display: inline-block">\n    <ion-row nowrap style="text-align: center">\n      <ion-col *ngFor="let date of dates" col-2 text-center class="date" (click)="changeDate(date)">\n        <div class="dayback">\n          <p class="day">{{date.month}}</p>\n        </div>\n        <p class="month">{{date.year}}</p>\n        <p class="day-number">{{date.day}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n\n    <ion-card-header>\n      Breakfast\n    </ion-card-header>\n\n    <ion-item *ngFor="let place of trip[i].breakfast" (click)="viewBreakfast($event, place)">\n      <h2>{{place.name}}</h2>\n      <p item-end>{{place.price}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      Attractions\n    </ion-card-header>\n\n    <ion-item *ngFor="let place of trip[i].attraction1" (click)="viewAttraction($event, place)">\n      <h2>{{place.venue.name}}</h2>\n      <!-- <p item-end>{{place.venue.price.currency}}</p> -->\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      Lunch\n    </ion-card-header>\n\n    <ion-item *ngFor="let place of trip[i].lunch" (click)="viewAfood($event, place)">\n      <h2>{{place.business.name}}</h2>\n      <p item-end>{{place.business.price}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      Dinner\n    </ion-card-header>\n\n    <ion-item *ngFor="let place of trip[i].dinner" (click)="viewAfood($event, place)">\n      <h2>{{place.business.name}}</h2>\n      <p item-end>{{place.business.price}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      Night Life\n    </ion-card-header>\n\n    <ion-item *ngFor="let place of trip[i].attraction2" (click)="viewAttraction($event, place)">\n      <h2>{{place.venue.name}}</h2>\n      <!-- <p item-end>{{place.venue.price}}</p> -->\n    </ion-item>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\trip\trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TripPage);

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flight_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightsPage = (function () {
    function FlightsPage(flightService, navCtrl) {
        this.flightService = flightService;
        this.navCtrl = navCtrl;
        this.dates = [];
        this.dates2 = [];
    }
    FlightsPage.prototype.ionViewCanEnter = function () {
        this.flights = this.flightService.getFlights();
        this.getDates();
        this.getDates2();
    };
    FlightsPage.prototype.getDates2 = function () {
        for (var i = 0; i < this.flights.length; i++) {
            var day, month, year, time;
            day = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(8, 10);
            month = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(5, 7);
            year = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(0, 4);
            time = this.flights[i].slice[1].segment[0].leg[0].departureTime.substring(11, 16);
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
            this.dates2.push({ "day": day, "month": month, "year": year, "time": time });
        }
    };
    FlightsPage.prototype.getDates = function () {
        for (var i = 0; i < this.flights.length; i++) {
            var day, month, year, time;
            day = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(8, 10);
            month = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(5, 7);
            year = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(0, 4);
            time = this.flights[i].slice[0].segment[0].leg[0].departureTime.substring(11, 16);
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
            this.dates.push({ "day": day, "month": month, "year": year, "time": time });
        }
    };
    return FlightsPage;
}());
FlightsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-flights',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\flights\flights.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Advent</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let flight of flights; let i = index" [attr.data-index]="i">\n\n    <ion-card-header style="padding:0 !important; margin:0!important; padding-left: 15px !important;">\n      <ion-item no-padding >\n        Flight Package {{i + 1}}\n        <div item-end style="text-align: right">${{flight.saleTotal.substring(3)}}</div>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-item>\n      <ion-icon name="plane" item-start large></ion-icon>\n      <h2>{{flight.slice[0].segment[0].leg[0].origin}} - {{flight.slice[0].segment[0].leg[0].destination}}</h2>\n      <p>{{ dates[i].month }} {{ dates[i].day }}, {{ dates[i].year }} - {{ dates[i].time }}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="plane" item-left large></ion-icon>\n      <h2>{{flight.slice[1].segment[0].leg[0].origin}} - {{flight.slice[1].segment[0].leg[0].destination}}</h2>\n      <p>{{ dates2[i].month }} {{ dates2[i].day }}, {{ dates2[i].year }} - {{ dates2[i].time }}</p>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\flights\flights.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_flight_service__["a" /* FlightService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], FlightsPage);

//# sourceMappingURL=flights.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trip_trip__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_flights_flights__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_afood_afood__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_attract_attract__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_breakf_breakf__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_flight_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_trip_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_start_start__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_trip_trip__["a" /* TripPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_flights_flights__["a" /* FlightsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_afood_afood__["a" /* AfoodPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_breakf_breakf__["a" /* BreakfPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_attract_attract__["a" /* AttractPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_trip_trip__["a" /* TripPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_flights_flights__["a" /* FlightsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_afood_afood__["a" /* AfoodPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_breakf_breakf__["a" /* BreakfPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_attract_attract__["a" /* AttractPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__services_flight_service__["a" /* FlightService */],
            __WEBPACK_IMPORTED_MODULE_11__services_trip_service__["a" /* TripService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_start_start__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AfoodPage = (function () {
    function AfoodPage(tripService, navCtrl, navParams) {
        this.tripService = tripService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AfoodPage.prototype.ionViewCanEnter = function () {
        this.place = this.tripService.getSelected();
        console.log(this.place);
    };
    return AfoodPage;
}());
AfoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-afood',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\afood\afood.html"*/'<ion-content>\n\n<img src="{{place.business.image_url}}" />\n\n<h2>{{place.business.name}}</h2>\n<ion-note style="padding-bottom:20px">{{place.business.location.address1}} | {{place.business.phone}}</ion-note>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\afood\afood.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AfoodPage);

//# sourceMappingURL=afood.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreakfPage = (function () {
    function BreakfPage(tripService, navCtrl, navParams) {
        this.tripService = tripService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BreakfPage.prototype.ionViewCanEnter = function () {
        this.place = this.tripService.getSelected();
        console.log(this.place);
    };
    return BreakfPage;
}());
BreakfPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-breakf',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\breakf\breakf.html"*/'<ion-content>\n\n  <img src="{{place.image_url}}" />\n\n  <h2>{{place.name}}</h2>\n  <ion-note style="padding-bottom:20px">{{place.location.address1}} | {{place.phone}}</ion-note>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\breakf\breakf.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], BreakfPage);

//# sourceMappingURL=breakf.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttractPage = (function () {
    function AttractPage(tripService, navCtrl, navParams) {
        this.tripService = tripService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttractPage.prototype.ionViewCanEnter = function () {
        this.place = this.tripService.getSelected();
        console.log(this.place);
    };
    return AttractPage;
}());
AttractPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-attract',template:/*ion-inline-start:"C:\Users\Abe\itin-app\src\pages\attract\attract.html"*/'\n\n\n<ion-content>\n\n  <img src="{{place.venue.photo_url}}" />\n\n  <h2>{{place.venue.name}}</h2>\n  <ion-note style="padding-bottom:20px">{{place.venue.location.address}} | {{place.venue.contact.phone}}</ion-note>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abe\itin-app\src\pages\attract\attract.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AttractPage);

//# sourceMappingURL=attract.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripService = (function () {
    function TripService() {
    }
    TripService.prototype.setTrip = function (trip) {
        this.trip = trip;
    };
    TripService.prototype.getTrip = function () {
        return this.trip;
    };
    TripService.prototype.getSelected = function () {
        return this.selected;
    };
    TripService.prototype.setSelected = function (selected) {
        this.selected = selected;
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightService = (function () {
    function FlightService() {
    }
    FlightService.prototype.setFlights = function (flights) {
        this.flights = flights;
    };
    FlightService.prototype.getFlights = function () {
        return this.flights;
    };
    return FlightService;
}());
FlightService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FlightService);

//# sourceMappingURL=flight.service.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map
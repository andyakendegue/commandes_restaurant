import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

/**
 * Generated class for the LocalisationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-localisation',
  templateUrl: 'localisation.html',
})
export class LocalisationPage {
idRestaurant : any = localStorage.idRestaurant;
nomRestaurant : any = localStorage.nomRestaurant;
categorieRestaurant : any = localStorage.categorieRestaurant;
phoneRestaurant : any = localStorage.phoneRestaurant;
emailRestaurant : any = localStorage.emailRestaurant;
site_webRestaurant : any = localStorage.site_webRestaurant;
latitudeRestaurant : any = localStorage.latitudeRestaurant;
longitudeRestaurant : any = localStorage.longitudeRestaurant;
imageRestaurant : any = localStorage.imageRestaurant;

@ViewChild('map') mapElement: ElementRef;

map: any;
mapInitialised: boolean = false;
apiKey: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation : Geolocation) {
  }

  ionViewDidLoad(){
    this.loadMap();
    console.log("map loading...");
  }


  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      console.log("map loading 2...");
      this.addMarker(latLng);
    }, (err) => {
      console.log(err);
    });

  }

  addMarker(latLng){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      //position: this.map.getCenter()
      position: latLng
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }


}

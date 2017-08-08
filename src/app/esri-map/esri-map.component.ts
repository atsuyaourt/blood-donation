import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
  @ViewChild('map') mapEl: ElementRef;

  map: any;
  location: any;
  zoom: any;


  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    this.location = [0, 0];
    this.zoom = 2;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.location = [longitude, latitude];
        this.zoom = 8;
      });
    }

    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
      // use a specific version of the API instead of the latest
      url: '//js.arcgis.com/3.21/'
    }).then(() => {
      // load the map class needed to create a new map
      this.esriLoader.loadModules(['esri/map']).then(([Map]) => {
        // create the map at the DOM element in this component
        this.map = new Map(this.mapEl.nativeElement, {
          center: this.location,
          zoom: this.zoom,
          basemap: 'dark-gray'
        });
      });


    });
  }

}

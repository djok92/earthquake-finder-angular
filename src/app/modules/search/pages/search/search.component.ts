import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CityService } from 'src/app/services/city.service';
import { EarthquakeService } from 'src/app/services/earthquake.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  coordinates: any = {
    latitude: '',
    longitude: ''
  };

  constructor(private cityService: CityService, private earthquakeService: EarthquakeService) { }

  ngOnInit() {
  }

  getFormValues(data) {
    this.cityService.getCoordinates(data.city).subscribe((responseCoords: any) => {
      this.coordinates.latitude = responseCoords.results[0].locations[0].displayLatLng.lat;
      this.coordinates.longitude = responseCoords.results[0].locations[0].displayLatLng.lng;
      this.earthquakeService.getEarthquake(data, this.coordinates).subscribe((responseEarthquake: any) => {
        console.log(responseEarthquake);
      });
    });

  }

}

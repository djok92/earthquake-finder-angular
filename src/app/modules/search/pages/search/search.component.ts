import { Component, OnInit } from '@angular/core';
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
  searchType = '';
  data = -1;
  constructor(private cityService: CityService, private earthquakeService: EarthquakeService) {}

  ngOnInit() {}

  initSearch(formData: any): void {
    this.cityService.getCoordinates(formData.city).subscribe((responseCoords: any) => {
      this.coordinates.latitude = responseCoords.results[0].locations[0].displayLatLng.lat;
      this.coordinates.longitude = responseCoords.results[0].locations[0].displayLatLng.lng;
      this.searchType = formData.searchType;
      this.earthquakeService.getEarthquake(formData, this.coordinates).subscribe((responseEarthquake: any) => {
        this.searchType === 'num'
          ? (this.data = responseEarthquake.features.length)
          : (this.data = this.calculateAverageMagnitude(responseEarthquake.features));
      });
    });
  }

  /**
   * Helper functions that calculates average magnitude
   * @param earthquakeArrayData - Array of earthquakes data
   */
  private calculateAverageMagnitude(earthquakeArrayData: any[]): number {
    return +(earthquakeArrayData.map(item => item.properties.mag).reduce((a, b) => a + b, 0) / earthquakeArrayData.length).toFixed(2);
  }
}

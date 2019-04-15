import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import { TranslateService } from '@ngx-translate/core';

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
  languages: string[] = [];
  currentLang = 'rs';

  constructor(private cityService: CityService, private earthquakeService: EarthquakeService, private translateService: TranslateService) {}

  ngOnInit() {
    this.languages = this.translateService.langs;
    this.currentLang = this.translateService.getDefaultLang();
  }

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

  languageSelectionChange(language: any) {
    this.translateService.use(language.target.value);
  }

  private calculateAverageMagnitude(earthquakeArray): number {
    return +(earthquakeArray.map(item => item.properties.mag).reduce((a, b) => a + b, 0) / earthquakeArray.length).toFixed(2);
  }
}

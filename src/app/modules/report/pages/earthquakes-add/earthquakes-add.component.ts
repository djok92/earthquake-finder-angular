import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-earthquakes-add',
  templateUrl: './earthquakes-add.component.html',
  styleUrls: ['./earthquakes-add.component.scss']
})
export class EarthquakesAddComponent implements OnInit {
  data: any;
  languages: string[] = [];
  currentLang = 'rs';

  constructor(private cityService: CityService, private earthquakeService: EarthquakeService, private translateService: TranslateService) {}

  ngOnInit() {
    this.languages = this.translateService.langs;
    this.currentLang = this.translateService.getDefaultLang();
  }

  /**
   * Function that calls methods from services, and inputs them form data
   * @param event - Value emited from the form
   */
  initSubmit(event): void {
    this.data = event;
    this.cityService.getCoordinates(this.data.city).subscribe((response: any) => {
      this.data.latitude = response.results[0].locations[0].displayLatLng.lat;
      this.data.longitude = response.results[0].locations[0].displayLatLng.lng;
      this.earthquakeService.storeEarthquake(this.data);
    });
  }

  /**
   * Function for setting the language
   * @param language - Language selected in select
   */
  languageSelectionChange(language: any): void {
    this.translateService.use(language.target.value);
  }
}

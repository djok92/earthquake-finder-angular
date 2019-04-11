import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  constructor(private httpService: HttpService) { }

  getEarthquake(data, coords) {
    console.log(data);
    const api = `${environment.apiEarthquakes.url}/fdsnws/event/1/query?format=geojson&minmagnitude=4&starttime=${data.startDate}&endtime=${data.endDate}&latitude=${coords.latitude}&longitude=${coords.longitude}&maxradiuskm=${data.radius}`;
    return this.httpService.get(api);
  }
}

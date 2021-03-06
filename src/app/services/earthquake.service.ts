import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Earthquake } from '../classes/Earthquake';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  private earthquakes$: BehaviorSubject<Earthquake[]> = new BehaviorSubject<Earthquake[]>([]);

  constructor(private httpService: HttpService) {}

  /**
   * Function for getting earthquake from api based on values provided in form
   * @returns - response from api call
   * @param data - data for url params, data from form
   * @param coords - coordinates for url params, coordinates from separate api call
   */
  getEarthquake(data, coords): Observable<any> {
    const api = `${environment.apiEarthquakes.url}/fdsnws/event/1/query?format=geojson&minmagnitude=4&starttime=${data.startDate}&endtime=${
      data.endDate
    }&latitude=${coords.latitude}&longitude=${coords.longitude}&maxradiuskm=${data.radius}`;
    return this.httpService.get(api);
  }

  /**
   * Function for storing the earthquakes in local storage
   * @param data - data from add earthquake form
   */
  storeEarthquake(data: any) {
    if (this.earthquakes$.value.length < 1) {
      const storedEarthquakes = JSON.parse(localStorage.getItem('Earthquakes'));
      const earthquake = this.mapEarthquake(data);
      this.earthquakes$.next([...storedEarthquakes, earthquake]);
      localStorage.setItem('Earthquakes', JSON.stringify(this.earthquakes$.value));
    } else {
      const earthquake = this.mapEarthquake(data);
      this.earthquakes$.next([...this.earthquakes$.value, earthquake]);
      localStorage.setItem('Earthquakes', JSON.stringify(this.earthquakes$.value));
    }
  }

  /**
   * Function for getting the earthquakes from local storage
   * @returns - Array of earthquakes as observable
   */
  getEarthquakes(): Observable<Earthquake[]> {
    const earthquakes$: ReplaySubject<Earthquake[]> = new ReplaySubject<Earthquake[]>(1);
    earthquakes$.next(JSON.parse(localStorage.getItem('Earthquakes')));
    return earthquakes$.asObservable();
  }

  /**
   * Helper function for mapping data for earthquake class
   * @returns - New instance of earthquake class
   * @param item - data to be mapped
   */
  private mapEarthquake(item: any): Earthquake {
    return new Earthquake({
      city: item.city,
      latitude: +item.latitude.toFixed(2),
      longitude: +item.longitude.toFixed(2),
      magnitude: +item.magnitude.toFixed(2)
    });
  }
}

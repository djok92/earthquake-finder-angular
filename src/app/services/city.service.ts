import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private httpService: HttpService) {}

  /**
   * Function that gets coordinates for entered city
   * @returns - response from api
   * @param city - Value from city input, param for api call
   */
  getCoordinates(city: string): Observable<any> {
    const api = `${environment.apiCoords.url}/address?key=${environment.apiCoords.key}&inFormat=kvp&outFormat=json&location=${encodeURI(
      city
    )}&thumbMaps=false&maxResults=1`;
    return this.httpService.get(api);
  }
}

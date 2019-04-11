import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpService: HttpService) { }

  getCoordinates(city) {
    const api = `${environment.apiCoords.url}/address?key=${environment.apiCoords.key}&inFormat=kvp&outFormat=json&location=${encodeURI(city)}&thumbMaps=false&maxResults=1`;
    return this.httpService.get(api);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * @returns - response
   * @param api - url
   */
  get(api): Observable<any> {
    return this.http.get(api);
  }
}

import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import { Earthquake } from 'src/app/classes/Earthquake';

@Component({
  selector: 'app-earthquakes-list',
  templateUrl: './earthquakes-list.component.html',
  styleUrls: ['./earthquakes-list.component.scss']
})
export class EarthquakesListComponent implements OnInit {

  earthquakes: any;
  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.earthquakeService.getEarthquakes().subscribe((response: Earthquake[]) => {
      this.earthquakes = response;
      console.log(this.earthquakes);
    });
  }

}

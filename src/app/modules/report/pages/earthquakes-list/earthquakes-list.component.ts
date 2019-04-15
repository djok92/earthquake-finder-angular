import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import { Earthquake } from 'src/app/classes/Earthquake';
import { CardRows } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-earthquakes-list',
  templateUrl: './earthquakes-list.component.html',
  styleUrls: ['./earthquakes-list.component.scss']
})
export class EarthquakesListComponent implements OnInit {
  cardRows: CardRows[] = [
    {
      key: 'city',
      title: 'Reported earthquake near'
    },
    {
      key: 'latitude',
      title: 'Latitude'
    },
    {
      key: 'longitude',
      title: 'Longitude'
    },
    {
      key: 'magnitude',
      title: 'Magnitude'
    }
  ];

  earthquakes: any;
  constructor(private earthquakeService: EarthquakeService) {}

  ngOnInit() {
    this.earthquakeService.getEarthquakes().subscribe((response: Earthquake[]) => {
      this.earthquakes = response;
    });
  }
}

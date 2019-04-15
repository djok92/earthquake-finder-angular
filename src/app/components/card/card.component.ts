import { Component, OnInit, Input } from '@angular/core';

export interface CardRows {
  key: any;
  title: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardRows: CardRows;
  @Input() dataSource: any[] = [];

  constructor() {}

  ngOnInit() {}
}

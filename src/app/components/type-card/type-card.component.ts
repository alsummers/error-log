import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss']
})
export class TypeCardComponent implements OnInit {
  @Input() status: string = "PROD"
  constructor() { }

  ngOnInit() {
  }

}

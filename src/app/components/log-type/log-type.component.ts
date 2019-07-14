import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'log-type',
  templateUrl: './log-type.component.html',
  styleUrls: ['./log-type.component.scss']
})
export class LogTypeComponent implements OnInit {
  @Input() type: string  = "error"
  constructor() { }

  ngOnInit() {
  }

}

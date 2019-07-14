import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
  @Input() logStatus: string = "default"
  @Input() location: string;
  @Input() logType: string;
  @Input() number: number;
  @Input() testDate: string;
  @Input() testInitials: string;
  @Input() testScript: string;
  @Input() error: string;
  @Input() progressStatus: string;

  constructor() { }

  ngOnInit() {
  
  }

}

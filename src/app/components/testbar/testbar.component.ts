import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testbar',
  templateUrl: './testbar.component.html',
  styleUrls: ['./testbar.component.scss']
})
export class TestbarComponent implements OnInit {
@Input() testerInitials: string
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public initials: string;
  constructor() { }

  ngOnInit() {
    this.getTester()
  }

  getTester(){
      this.initials = localStorage.getItem('Initials')
  }

}

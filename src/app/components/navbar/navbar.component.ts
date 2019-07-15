import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Output() tab = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    this.tab.emit("Unit_Leader")
  }

  navigate(button: MatButtonToggle){
    this.tab.emit(button.value)
  }

}

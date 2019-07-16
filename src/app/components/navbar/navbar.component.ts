import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, AfterViewInit {
  @Output() tab = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    this.tab.emit("Unit_Leader")
  }

  ngAfterViewInit() {
      var b = document.getElementById('mat-button-toggle-3').classList
      b.add('mat-button-toggle-checked')
  }
  navigate(button: MatButtonToggle){
    if(button.value !== 'Unit_Leader'){
        var b = document.getElementById('mat-button-toggle-3').classList
        b.remove('mat-button-toggle-checked')
    }
    this.tab.emit(button.value)
  }

}

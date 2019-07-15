import { Component, OnInit, Input, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit{
  public errors: any;
  public filteredErrors: any[] =[];
  constructor(private db: TableService, private router: Router) { }

  ngOnInit() {
  }
  loadData(event:string){
    this.filteredErrors = []
    this.db.fetchTable().subscribe((response) => {
      this.errors = response;
      this.errors.forEach((element) => {
        if(element.app == 'Unit_Leader' || element.app == 'Scout' || element.app == 'Popcorn'){
          element.error = 'As user ' + element.bug_username + '. ' + element.error
        }
        if(element.app == event){
          this.filteredErrors.push(element)
        } else {
          return
        }
      })
    })
  }

}

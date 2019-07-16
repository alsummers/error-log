import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "allison.summers@weaverfundraising.com"

  constructor(public router: Router, public db: TableService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
      let email = loginForm.controls.email.value;
      this.db.fetchUsers().subscribe((response) => {
          let users: any;
          users = response
          let userCred = []
          let userInitials = []
          users.forEach((element) => {
             if(element.email === email){
                 localStorage.setItem('Initials', element.initials)
                 this.router.navigate(['/main']);
             } else {
                 return
             }
          })
      })
      
  }

}

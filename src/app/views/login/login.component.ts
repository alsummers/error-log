import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "allison.summers@weaverfundraising.com"

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
      let email = loginForm.controls.email.value;

      var f = email.substring(email.length - 22)
      
      if(f === "@weaverfundraising.com"){
        console.log('confirm')
        this.router.navigate(['main'])
      } else {
        console.log('cannot login')
      }
  }

}

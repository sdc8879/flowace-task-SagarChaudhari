import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serive: ApiService, private router: Router) {

  }

  ngOnInit() {
    sessionStorage.clear()
  }

  email: any
  password: any;

  onLogin() {
    console.log('inside login')
    let body = {};
    body = { "email": this.email, "password": this.password }
    this.serive.postData('login', body).subscribe((result) => {
      console.log('result------------', result);

      sessionStorage.setItem("id", result['id']);
      sessionStorage.setItem("name", result['name']);
      sessionStorage.setItem("type", result['type']);
      
      if (result["type"] == "admin") {
        console.log('-------------1st if')
        this.router.navigate(["dashboard"])        
      }
      if (result["type"] == "customer") {
        console.log('-------------2nd if')
        this.router.navigate(["products"])
      }


    });
  }
  acceptOrder() {
    this.serive.socketEmit('acceptOrder', true)
  }





}

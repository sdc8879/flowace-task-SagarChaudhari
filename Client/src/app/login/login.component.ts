import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) {

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
    this.service.postData('login', body).subscribe((result1) => {
      console.log('result------------', result1);

      this.service.makeSocketConnection();

      this.service.socketOn("send_socket_id").subscribe((result2) => {

        let query = "update mst_user set user_socket_id='" + result2["socket_id"] + "' where id=" + result1['id'];
        let body = { "query": query };

        this.service.postData('executequery', body).subscribe((result3) => {
          sessionStorage.setItem("socket_id", result2["socket_id"]);

          sessionStorage.setItem("id", result1['id']);
          sessionStorage.setItem("name", result1['name']);
          sessionStorage.setItem("type", result1['type']);

          if (result1["type"] == "admin") {
            console.log('-------------1st if')

            this.router.navigate(["dashboard"])
          }
          if (result1["type"] == "customer") {
            console.log('-------------2nd if')
            this.router.navigate(["products"])
          }

        });



      })


    });
  }
  acceptOrder() {
    this.service.socketEmit('acceptOrder', true)
  }





}

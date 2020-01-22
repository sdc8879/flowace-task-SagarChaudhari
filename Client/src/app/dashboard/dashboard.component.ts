import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  abc: boolean = false;
  noOfOrder: any=[]

  constructor(private apiService: ApiService) {

  }


  ngOnInit() {
    this.apiService.socketOn('orderstatus').subscribe((res) => {
      this.abc = res["value"]
      console.log("res[value]----------", res["value"])
    })

    this.apiService.socketOn("noOfOrders").subscribe((res) => {
      console.log('noOfOrders-------------', res)
      this.noOfOrder.push(res);
      console.log('noOfOrder-------------', this.noOfOrder)
    })

  }

}

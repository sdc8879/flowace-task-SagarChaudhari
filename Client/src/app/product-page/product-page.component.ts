import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productList: any;
  constructor(private service: ApiService) {
    this.getProducts();
  }

  ngOnInit() {
    this.getOrderStatus()
  }

  getProducts() {
    // this.service.getData('productlist').subscribe((result) => {
    //   console.log('result------------', result)
    //   this.productList = result
    // })

    this.service.getData('productlist').pipe(
      map(function (ele) {
        let arrayObj: any = [];
        arrayObj = ele
        arrayObj.map((element) => {
          element["buy_now_btn"] = true;
          element["pending_btn"] = false;
          element["soldout_btn"] = false;
          element["confirmed_btn"] = false;
        })
        return arrayObj
      })).subscribe(result => this.productList = result);

  }

  buyNow(data, index) {

    this.productList[index]["pending_btn"] = true;
    this.productList[index]["buy_now_btn"] = false;

    let obj = {}
    obj = Object.assign(data)
    obj["customer_name"] = sessionStorage.getItem("name")
    obj["customer_id"] = sessionStorage.getItem("id");
    this.service.socketEmit("orderRequested", obj);
  }

  getOrderStatus() {

    this.service.socketOn("getOrderStatus").subscribe((result) => {

      this.productList.forEach(element1 => {

        if (element1["item_id"] == result["item_id"]) {

          if (result["item_order_status"] == 2) {
            element1["buy_now_btn"] = false;
            element1["pending_btn"] = false;
            element1["soldout_btn"] = false;
            element1["confirmed_btn"] = true;
          }
          if (result["item_order_status"] == 1) {
            element1["buy_now_btn"] = false;
            element1["pending_btn"] = false;
            element1["soldout_btn"] = true;
            element1["confirmed_btn"] = false;
          }

        }

      });
    })

  }

}

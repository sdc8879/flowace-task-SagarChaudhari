import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() itemList: any = [];
  snackBarMSg: any = null

  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("itemList----", this.itemList)
  }

  orderStatus(status, index, itemObj) {

    itemObj["customer_id"] = sessionStorage.getItem("id");

    // itemObj["socket_id"] = sessionStorage.getItem("socket_id");

    if (status == 'confirmed') {
      itemObj["item_order_status"] = 2;
      this.orderStatusUpdate(status, index, itemObj)
    }
    if (status == 'canceled') {
      itemObj["item_order_status"] = 1
      this.orderStatusUpdate(status, index, itemObj)
    }
  }

  orderStatusUpdate(status, index, itemObj) {
    this.service.socketEmit('setOrderStatus', itemObj);

    this.snackBarMSg = "Order is " + status;
    var x = document.getElementById("snackbar");
    x.className = "show";
    this.itemList.splice(index, 1);
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);

  }


}

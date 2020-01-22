import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public userType:any

  ngOnInit() {
    this.setNavBarLink()
  }

  setNavBarLink() {
    this.userType=sessionStorage.getItem("type")
  }

}

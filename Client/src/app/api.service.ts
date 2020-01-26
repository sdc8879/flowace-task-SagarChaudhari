import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  socket: any;
  projectPath: any;
  constructor(private http: HttpClient) {
    console.log('inside service')
    this.projectPath = 'http://localhost:3000';
  }

  makeSocketConnection() {
    this.socket = io(this.projectPath);
    this.socketOn("send_socket_id").subscribe((result) => {
      sessionStorage.setItem("socket_id", result["socket_id"]);
    })
  }


  setSocketId() {

  }


  getData(url: string) {
    return this.http.get(this.projectPath + "/api/" + url)
  }

  postData(url: string, params?: any) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.projectPath + "/api/" + url, { params: params }, httpOptions)
  }

  socketOn(eventname) {
    let observable = new Observable(observer => {
      if (!!this.socket) {
        this.socket.on(eventname, (data) => {
          observer.next(data);
        });
      }
    })
    return observable;
  }

  socketEmit(eventname, data) {
    console.log("inside socket emit")
    if (!!this.socket) {
      this.socket.emit(eventname, data)
    }
  }

}

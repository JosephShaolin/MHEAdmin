import { Component, OnInit } from '@angular/core';
import { IApplicationSecurity } from '../../interface/applicationSecurity';

@Component({
  selector: 'app-application-security',
  templateUrl: './application-security.component.html',
  styleUrls: ['./application-security.component.css']
})
export class ApplicationSecurityComponent implements OnInit {
  accessUserList: IApplicationSecurity[] = [];
  registerUser: IApplicationSecurity = {
    "AirId": "001",
    "Directory": "san.zhang@accenture.com",
    "IsGroup": true,
    "CanEdit": true,
    "CanRemove": true
  };
  addUser: string = '';

  constructor() {

  }

  ngOnInit() {
    this.accessUserList.push(this.registerUser);
  }

  addAccessUser() {    
    let userInfo:IApplicationSecurity ={
      "AirId": "001",
      "Directory": this.addUser,
      "IsGroup": false,
      "CanEdit": false,
      "CanRemove": false
    };
    this.accessUserList.push(userInfo);
    this.addUser=null;
  }

}

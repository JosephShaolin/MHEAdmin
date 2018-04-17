import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, BuiltInOptions } from "ngx-bootstrap-modal";

import { ApplicationsService } from '../../services/applications.service';
import { IApplication } from '../../interface/application';
import { PopUp } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-application-register',
  templateUrl: './application-register.component.html',
  styleUrls: ['./application-register.component.css']
})

export class ApplicationRegisterComponent implements OnInit {
  application: IApplication ; 

  constructor(private _router: Router, private _applicationsService: ApplicationsService, public dialogService: DialogService) { }

  ngOnInit() {
    this.application={
      "airId": null,
      "applicationName": null,
      "description": null,
      "authCode": null,
      "deleted": 'false',
      "createdBy": null,
      "createdDateTime": null,
      "updatedBy": null,
      "updatedDateTime": null
    };
  }

  onRegister(): void {        
    this.application.updatedDateTime = new Date();
    this.application.createdDateTime = new Date();
    this._applicationsService.registerApplication(this.application).subscribe(
      (authCode) => {
        if(authCode){
          this.showConfirm('Success',authCode);
        }        
      }
    );
  }

  clickCancel():void{
    this._router.navigate(['/home']);
  }

  showConfirm(popUpTitle:string,PopUpContent:string) {
    this.dialogService.addDialog(PopUp, {
      title: popUpTitle,
      message: 'Auth Code : '+PopUpContent
    }).subscribe((isConfirmed) => {          
          this._router.navigate(['/applicationDetail', this.application.airId]);
      });
  }
}

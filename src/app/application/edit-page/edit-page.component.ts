import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IApplication } from '../../interface/application';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  currentAirId: string;
  currentApp: IApplication;
  application: IApplication = {
    "airId": null,
    "applicationName": null,
    "description": null,
    "authCode": null,
    "deleted": null,
    "createdBy": null,
    "createdDateTime": null,
    "updatedBy": null,
    "updatedDateTime": null
  };
  errorMessage: string;


  constructor(private _applicationsService: ApplicationsService, private _router: Router, private _route: ActivatedRoute) {
    this.currentAirId = this._route.snapshot.paramMap.get('airId').toString();
  }

  ngOnInit() {
    this._applicationsService.getApplications().subscribe(myApplications => {
      this.currentApp = myApplications.filter(a => a.airId == this.currentAirId)[0];
      this.application = this.currentApp;
    },
      error => this.errorMessage = <any>error);
  }

  saveEdit() {
    this.application.updatedDateTime = new Date();
    this._applicationsService.updateApplication(this.application).subscribe((OK) => {
      this._router.navigate(['/home']);
    }, error => this.errorMessage = <any>error);
  }

  clickCancel(): void {
    this._router.navigate(['/home']);
  }

}

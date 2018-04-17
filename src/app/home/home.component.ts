import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IApplication } from '../interface/application';
import { ApplicationsService } from '../services/applications.service';
import { ApplicationsInformationService } from '../services/applications-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  applications: IApplication[];
  errorMessage: string;

  constructor(private _applicationsService: ApplicationsService, private _router: Router, private _applicationsInformationService: ApplicationsInformationService) {

  }

  ngOnInit(): void {
    this.getApps();
  }

  getApps() {
    this._applicationsService.getApplications().subscribe(myApplications => {
      this.applications = myApplications;
      this._applicationsInformationService.Information = myApplications;
    },
      error => this.errorMessage = <any>error);
  }

  removeApp(event: Event, airId: string) {
    event.stopPropagation();
    this._applicationsService.deleteApplication(airId).subscribe((OK) => {
      this.getApps();
    }, error => this.errorMessage = <any>error);

  }

  editApp(event: Event, airId: string) {
    event.stopPropagation();
    this._router.navigate(['/edit', airId]);
  }

  clickCard(airId: string) {
    this._router.navigate(['/applicationDetail', airId]);
  }
}


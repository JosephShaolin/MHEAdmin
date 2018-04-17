import { Component, OnInit } from '@angular/core';

import { IBusinessUnit } from '../../interface/businessUnit';
import { IApplication } from '../../interface/application';
import { BusinessUnitsService } from '../../services/business-units.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationsInformationService } from '../../services/applications-information.service';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  application: IApplication;
  myBusinesses: IBusinessUnit[];
  errorMessage: string;
  currentAirId: string;

  constructor(private _applicationsService:ApplicationsService,
    private _businessUnitsService: BusinessUnitsService,
    private _route: ActivatedRoute,
    private router: Router, 
    private _applicationsInformationService: ApplicationsInformationService) {

  }

  ngOnInit() {    
    this.currentAirId = this._route.snapshot.paramMap.get('airId').toString();
    this.getApplication();
    // this.application = this._applicationsInformationService.Information.filter(a => a.airId == this.currentAirId)[0];
    this._businessUnitsService.getBusinesses(this.currentAirId).subscribe(businesses => {
      this.myBusinesses = businesses;
    },
      error => this.errorMessage = <any>error);
  }

  getApplication() {
    this._applicationsService.getApplications().subscribe(myApplications => {
      this.application = myApplications.filter(a => a.airId == this.currentAirId)[0];      
    },
      error => this.errorMessage = <any>error);
  }

  showBusiness(code:string){     
        this.router.navigate(['businessDetail'], {  
            queryParams: {  
              airId: this.currentAirId,  
              BCode: code  
            }  
        });  
    }  
    

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBusinessUnit } from '../../interface/businessUnit';
import { BusinessUnitsService } from '../../services/business-units.service';

@Component({
  selector: 'app-business-unit-detail',
  templateUrl: './business-unit-detail.component.html',
  styleUrls: ['./business-unit-detail.component.css']
})
export class BusinessUnitDetailComponent implements OnInit {
  currentAirId: string;
  currentBusinessCode: string;
  isEditable: boolean = false;
  editBtnName: string = "Edit";
  businessUnit: IBusinessUnit = {
    "airId": this.currentAirId,
    "businessCode": this.currentBusinessCode,
    "name": null,
    "description": null,
    "requestType": null,
    "responseEndPoint": null,
    "useDefaultTemplate": true,
    "createdBy": null,
    "createdDateTime": null,
    "updatedBy": null,
    "updatedDateTime": null
  };
  errorMessage: string;

  constructor(private _businessUnitsService: BusinessUnitsService, private _router: Router, private activatedRoute: ActivatedRoute ) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.currentAirId = queryParams.airId;
      this.currentBusinessCode = queryParams.BCode;
    });
  }

  ngOnInit() {
    this._businessUnitsService.getBusinessInfo(this.currentAirId, this.currentBusinessCode).subscribe(businesses => {
      this.businessUnit = businesses;
    },
      error => this.errorMessage = <any>error);
  }

  goBack() {
    this._router.navigate(['/applicationDetail', this.currentAirId]);
  }

  editOrSave() {
    this.isEditable = !this.isEditable;
    
    if (this.isEditable) {
      this.editBtnName = "Save";
    }
    else {
      this.editBtnName = "Edit";
      this._businessUnitsService.updateBusinessInfo(this.businessUnit).subscribe(
        (OK) => {
          this._router.navigate(['/applicationDetail', this.businessUnit.airId]);
        },
        error => this.errorMessage = <any>error
      );
    }
  }

  cancleEdit(){
    this.isEditable = false;
    this.editBtnName = "Edit";
  }

  deleteBusiness() {    
    this._businessUnitsService.deleteBusiness(this.currentAirId, this.currentBusinessCode).subscribe(
      (OK) => {
        this._router.navigate(['/applicationDetail', this.businessUnit.airId]);
      },
      error => this.errorMessage = <any>error
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { IBusinessUnit } from '../../interface/businessUnit';
import { BusinessUnitsService } from '../../services/business-units.service';

@Component({
  selector: 'app-business-unit-register',
  templateUrl: './business-unit-register.component.html',
  styleUrls: ['./business-unit-register.component.css']
})
export class BusinessUnitRegisterComponent implements OnInit {
  businessUnit: IBusinessUnit;
  ckeditorContent = '';

  config = {
    toolbarGroups: [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
      { name: 'forms' },
      '/',
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
      { name: 'links' },
      { name: 'insert' },
      '/',
      { name: 'styles' },
      { name: 'colors' },
      { name: 'tools' },
      { name: 'others' },
      { name: 'about' },
      '/',
      { name: 'documenthandling' }
    ],
    toolbarLocation: 'top',
    uiColor: '#AADC6E',
    width: '75%'
  };

  constructor(private _businessUnitsService:BusinessUnitsService,private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.businessUnit = {
      "airId":  this._route.snapshot.paramMap.get('airId'),
      "businessCode": null,
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
  }
  onRegister(): void {
    this.businessUnit.updatedDateTime = new Date();
    this.businessUnit.createdDateTime = new Date();
    this._businessUnitsService.registerBusiness(this.businessUnit).subscribe(
      (OK) => {
        this._router.navigate(['/applicationDetail',this.businessUnit.airId]);
      }
    );
  }

  clickCancel(): void {
    this._router.navigate(['/applicationDetail', this.businessUnit.airId]);
  }
}

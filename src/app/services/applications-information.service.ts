import { Injectable } from '@angular/core';

import { IApplication } from '../interface/application';

@Injectable()
export class ApplicationsInformationService {
  private applicationsInformation: IApplication[];

  constructor() { }
  
  public get Information() : IApplication[] {
    return this.applicationsInformation;
  }  
  
  public set Information(info : IApplication[]) {
    this.applicationsInformation= info;
  }  
}

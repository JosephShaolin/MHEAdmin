import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';

import { IBusinessUnit } from '../interface/businessUnit';
import { environment } from '../../environments/environment';

@Injectable()
export class BusinessUnitsService {
  private _apiUrl=environment.businessApiURL;
  
  constructor(private _http: HttpClient) { }

  getBusinesses(airID:string): Observable<IBusinessUnit[]> {
    return this._http.get<IBusinessUnit[]>(this._apiUrl.getBusinessesUrl+airID).shareReplay().catch(this.handleError);
  }

  getBusinessInfo(airID:string, businessCode:string): Observable<IBusinessUnit> {
    return this._http.get<IBusinessUnit[]>(this._apiUrl.getBusinessesUrl+airID+'/'+businessCode).shareReplay().catch(this.handleError);
  }

  updateBusinessInfo(businessInfo:IBusinessUnit): Observable<any> {
    return this._http.post(this._apiUrl.updateBusinessUrl, businessInfo).catch(this.handleError);
  }

  deleteBusiness(airID:string, businessCode:string): Observable<any> {
    return this._http.post(this._apiUrl.deleteBusinessUrl+airID+'/'+businessCode,null).catch(this.handleError);
  }

  registerBusiness(businessInfo:IBusinessUnit): Observable<any> {
    return this._http.post(this._apiUrl.registerBusinessUrl, businessInfo).catch(this.handleError);
  }

  private handleError(e: HttpErrorResponse) {
        console.error(e.message);
        return Observable.throw(e.message);
    }

}

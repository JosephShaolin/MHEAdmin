import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';

import { IApplication } from '../interface/application';
import { environment } from '../../environments/environment';


@Injectable()
export class ApplicationsService {
  private _apiUrl=environment.applicatopnApiURL;
  
  constructor(private _http: HttpClient) { }

  getApplications(): Observable<IApplication[]> {
    return this._http.get<IApplication[]>(this._apiUrl.getApplicationsUrl).shareReplay().catch(this.handleError); 
  }

  registerApplication(application: IApplication):Observable<any>{
    return this._http.post(this._apiUrl.registerApplicationUrl,application).catch(this.handleError);
  }

  deleteApplication(airId:string):Observable<any>{
    return this._http.post(this._apiUrl.deleteApplicationUrl+airId,null).catch(this.handleError);
  }

  updateApplication(application: IApplication):Observable<any>{
    return this._http.post(this._apiUrl.updateApplicationUrl,application).catch(this.handleError);
  }

  private handleError(e: HttpErrorResponse) {
        console.error(e.message);
        return Observable.throw(e.message);
    }

}

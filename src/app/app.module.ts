import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ng2-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { ModalModule } from 'ng2-bootstrap/modal';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';
import { ApplicationRegisterComponent } from './application/application-register/application-register.component';
import { BusinessUnitDetailComponent } from './business/business-unit-detail/business-unit-detail.component';
import { BusinessUnitRegisterComponent } from './business/business-unit-register/business-unit-register.component';
import { ApplicationSecurityComponent } from './application/application-security/application-security.component';
import { ApplicationsService } from './services/applications.service';
import { BusinessUnitsService } from './services/business-units.service';
import { ApplicationsInformationService } from './services/applications-information.service';
import { BussinesUnitsInformationService } from './services/bussines-units-information.service';
import { PopUp } from './application/pop-up/pop-up.component';
import { EditPageComponent } from './application/edit-page/edit-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationDetailComponent,
    ApplicationRegisterComponent,
    BusinessUnitDetailComponent,
    BusinessUnitRegisterComponent,
    ApplicationSecurityComponent,
    PopUp,
    EditPageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule,
    AlertModule.forRoot(),
    CKEditorModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'registerApplication', component: ApplicationRegisterComponent },
      { path: 'applicationDetail/:airId', component: ApplicationDetailComponent },
      { path: 'registerBusiness/:airId', component: BusinessUnitRegisterComponent },
      { path: 'businessDetail', component: BusinessUnitDetailComponent },
      { path: 'edit/:airId', component: EditPageComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [
    ApplicationsService,
    BusinessUnitsService,
    ApplicationsInformationService,
    BussinesUnitsInformationService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [
    PopUp
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

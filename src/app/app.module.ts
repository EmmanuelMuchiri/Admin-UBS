import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { LoginComponent } from './login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// HttpClient module for RESTful API
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetPaymentsComponent } from './get-payments/get-payments.component';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';
// Forms module
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ApiService } from './api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillsDetailsComponent,
    MerchantDetailsComponent,
    GetPaymentsComponent,
    RevenueStreamsComponent,
    GenerateBillComponent,
    LoginComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule   
  
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

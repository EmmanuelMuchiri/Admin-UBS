import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { GetPaymentsComponent } from './get-payments/get-payments.component';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';
// Forms module
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './_component/login/login.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillsDetailsComponent,
    MerchantDetailsComponent,
    GetPaymentsComponent,
    RevenueStreamsComponent,
    LoginComponent,
    DashboardComponent,
    GenerateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost'],
        blacklistedRoutes: ['localhost/auth/login']
      }
    })    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

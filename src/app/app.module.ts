import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GetPaymentsComponent } from './get-payments/get-payments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillsDetailsComponent,
    MerchantDetailsComponent,
    GetPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

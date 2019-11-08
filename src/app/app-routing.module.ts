import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { GetPaymentsComponent } from './get-payments/get-payments.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bills-details', component: BillsDetailsComponent },
  { path: 'merchant-details', component: MerchantDetailsComponent},
  { path: 'payments-details', component: GetPaymentsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

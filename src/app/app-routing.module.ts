import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { GetPaymentsComponent } from './get-payments/get-payments.component';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';
import { LoginComponent } from './login';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bills-details', component: BillsDetailsComponent, canActivate: [AuthGuard] },
  { path: 'merchant-details', component: MerchantDetailsComponent, canActivate: [AuthGuard] },
  { path: 'revenue-streams', component: RevenueStreamsComponent, canActivate: [AuthGuard] },
  { path: 'payments-details', component: GetPaymentsComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

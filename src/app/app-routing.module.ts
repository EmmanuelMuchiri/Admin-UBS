import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { GetPaymentsComponent } from './get-payments/get-payments.component';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';
import { AuthGuard } from './_guards/auth.guard';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { LoginComponent } from './_component/login/login.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
;


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  { path: 'bills-details', component: BillsDetailsComponent },
  { path: 'merchant-details', component: MerchantDetailsComponent},
  { path: 'revenue-streams', component: RevenueStreamsComponent },
  { path: 'payments-details', component: GetPaymentsComponent},
  { path: 'generate-bill', component: GenerateBillComponent
},


  { path: 'dashboard', canActivate: [AuthGuard],component: DashboardComponent },
  { path: 'login', component: LoginComponent },

  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { HomePageComponent } from './Home/homepage.component';
import { PageNotFoundComponent } from './error/pagenotfound.component';
import { GetPalletSheetComponent } from './Actions/getPalletSheet';
import { AddPalletSheetComponent } from './Actions/addPalletSheet';
import { CommittedTransactionsComponent } from './Actions/committedTransactions';
import { SuccessCommittedTransactionsComponent } from './Actions/successCommittedTransactions';
import { FailedCommittedTransactionsComponent } from './Actions/failedCommittedTransactions';



const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'getpalletSheet', component: GetPalletSheetComponent },
  { path: 'addPalletSheet', component: AddPalletSheetComponent },
  { path: 'committedTransactions', component: CommittedTransactionsComponent },
  { path: 'onAggree', component: SuccessCommittedTransactionsComponent },
  { path: 'onDisaggree', component: FailedCommittedTransactionsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingModule = [LoginComponent,HomePageComponent,PageNotFoundComponent
,GetPalletSheetComponent
,AddPalletSheetComponent
,CommittedTransactionsComponent
,SuccessCommittedTransactionsComponent
,FailedCommittedTransactionsComponent
];

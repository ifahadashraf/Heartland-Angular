import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { MainComponent } from './main/main.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountSummaryComponent } from './account-overview/account-summary/account-summary.component';
import { PaymentPlanComponent } from './account-overview/payment-plan/payment-plan.component';
import { TransactionHistoryComponent } from './account-overview/transaction-history/transaction-history.component';
import { PaymentHistoryComponent } from './account-overview/payment-history/payment-history.component';
import { DocumentsComponent } from './account-overview/documents/documents.component';
import { GuestPaymentComponent } from './guest-payment/guest-payment.component';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'securityQuestion', component: SecurityQuestionComponent},
  {path: 'main', component: MainComponent},
  {path: 'accountOverview', component: AccountOverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    SecurityQuestionComponent,
    MainComponent,
    AccountOverviewComponent,
    AccountSummaryComponent,
    PaymentPlanComponent,
    TransactionHistoryComponent,
    PaymentHistoryComponent,
    DocumentsComponent,
    GuestPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';
import { MainComponent } from './components/main/main.component';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { AccountSummaryComponent } from './components/account-overview/account-summary/account-summary.component';
import { PaymentPlanComponent } from './components/account-overview/payment-plan/payment-plan.component';
import { TransactionHistoryComponent } from './components/account-overview/transaction-history/transaction-history.component';
import { PaymentHistoryComponent } from './components/account-overview/payment-history/payment-history.component';
import { DocumentsComponent } from './components/account-overview/documents/documents.component';
import { GuestPaymentComponent } from './components/guest-payment/guest-payment.component';
import { HeartlandCardsComponent } from './components/main/heartland-cards/heartland-cards.component';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'node_modules/ngx-loading';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'securityQuestion', component: SecurityQuestionComponent},
  {path: 'main', component: MainComponent},
  {path: 'accountOverview', component: AccountOverviewComponent},
  {path: 'guestPayment', component: GuestPaymentComponent}
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
    GuestPaymentComponent,
    HeartlandCardsComponent,
    LoaderComponent,
    MakePaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.chasingDots,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      fullScreenBackdrop: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

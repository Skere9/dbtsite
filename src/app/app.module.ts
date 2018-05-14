import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtSignInComponent } from './components/dbt-sign-in/dbt-sign-in.component';
import { DbtUserProfileComponent } from './components/dbt-user-profile/dbt-user-profile.component';
import { DbtAboutComponent } from './components/dbt-about/dbt-about.component';
import { DbtFooterComponent } from './components/dbt-footer/dbt-footer.component';
import { DbtForgotPasswordComponent } from './components/dbt-forgot-password/dbt-forgot-password.component';
import { DbtContactComponent } from './components/dbt-contact/dbt-contact.component';
import { DbtTermsComponent } from './components/dbt-terms/dbt-terms.component';
import { DbtSitemapComponent } from './components/dbt-sitemap/dbt-sitemap.component';

import { GlobalService } from './services/global.service';
import { ExamService } from './services/exam.service';
import { DbtEditExamComponent } from './components/dbt-edit-exam/dbt-edit-exam.component';
import { DbtSignUpComponent } from './components/dbt-sign-up/dbt-sign-up.component';
import { DbtExamInfoComponent } from './components/dbt-exam-info/dbt-exam-info.component';
import { DbtLogOffComponent } from './components/dbt-log-off/dbt-log-off.component';

import { TooltipOverviewExampleComponent } from './components/tooltip-overview-example/tooltip-overview-example.component';
import { DbtEditExamQsComponent } from './components/dbt-edit-exam-qs/dbt-edit-exam-qs.component';
import { DbtEditExamQlistComponent } from './components/dbt-edit-exam-qlist/dbt-edit-exam-qlist.component';
import { DbtPricingComponent } from './components/dbt-pricing/dbt-pricing.component';
import { DbtBuyComponent } from './components/dbt-buy/dbt-buy.component';
import { DbtMenu01Component } from './components/dbt-menu-01/dbt-menu-01.component';

@NgModule({
  declarations: [
    AppComponent,
    DbtHomeComponent,
    DbtSignInComponent,
    DbtListComponent,
    DbtUserProfileComponent,
    DbtAboutComponent,
    DbtFooterComponent,
    DbtForgotPasswordComponent,
    DbtContactComponent,
    DbtTermsComponent,
    DbtSitemapComponent,
    DbtEditExamComponent,
    DbtSignUpComponent,
    DbtExamInfoComponent,
    DbtLogOffComponent,
    TooltipOverviewExampleComponent,
    DbtEditExamQsComponent,
    DbtEditExamQlistComponent,
    DbtPricingComponent,
    DbtBuyComponent,
    DbtMenu01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [
    GlobalService,
    ExamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

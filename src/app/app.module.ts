import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { HttpClientModule   } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application Components
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
import { DbtEditExamComponent } from './components/dbt-edit-exam/dbt-edit-exam.component';
import { DbtSignUpComponent } from './components/dbt-sign-up/dbt-sign-up.component';
import { DbtExamInfoComponent } from './components/dbt-exam-info/dbt-exam-info.component';
import { DbtLogOffComponent } from './components/dbt-log-off/dbt-log-off.component';
import { DbtEditExamQsComponent } from './components/dbt-edit-exam-qs/dbt-edit-exam-qs.component';
import { DbtEditExamQlistComponent } from './components/dbt-edit-exam-qlist/dbt-edit-exam-qlist.component';
import { DbtPricingComponent } from './components/dbt-pricing/dbt-pricing.component';
import { DbtBuyComponent } from './components/dbt-buy/dbt-buy.component';
import { DbtMenu01Component } from './components/dbt-menu-01/dbt-menu-01.component';
import { DbtPostListComponent } from './components/dbt-post-list/dbt-post-list.component';
import { DbtUserListComponent } from './components/dbt-user-list/dbt-user-list.component';

import { TooltipOverviewExampleComponent } from './components/tooltip-overview-example/tooltip-overview-example.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ThankYouCheckEmailComponent } from './components/thank-you-check-email/thank-you-check-email.component';
import { VideosComponent } from './components/videos/videos.component';

// Application Services
import { GlobalService } from './services/global.service';
import { ExamService } from './services/exam.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

// Application Pipes
import { DateTimePostsPipe } from './pipes/date-time-posts.pipe';
import { DbtSurveyComponent } from './components/dbt-survey/dbt-survey.component';

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
    DbtMenu01Component,
    PrivacyPolicyComponent,
    ThankYouCheckEmailComponent,
    VideosComponent,
    DbtPostListComponent,
    DbtUserListComponent,
    DateTimePostsPipe,
    DbtSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    // HttpClientModule
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    ExamService,
    PostService,
    GlobalService,
    UserService,
    DateTimePostsPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

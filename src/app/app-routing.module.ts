import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtEditExamComponent } from './components/dbt-edit-exam/dbt-edit-exam.component';
import { DbtAboutComponent } from './components/dbt-about/dbt-about.component';
import { DbtSignInComponent } from './components/dbt-sign-in/dbt-sign-in.component';
import { DbtSignUpComponent } from './components/dbt-sign-up/dbt-sign-up.component';
import { DbtUserProfileComponent } from './components/dbt-user-profile/dbt-user-profile.component';
import { DbtForgotPasswordComponent } from './components/dbt-forgot-password/dbt-forgot-password.component';
import { DbtContactComponent } from './components/dbt-contact/dbt-contact.component';
import { DbtSitemapComponent } from './components/dbt-sitemap/dbt-sitemap.component';
import { DbtTermsComponent } from './components/dbt-terms/dbt-terms.component';
import { DbtLogOffComponent } from './components/dbt-log-off/dbt-log-off.component';
import { DbtEditExamQsComponent } from './components/dbt-edit-exam-qs/dbt-edit-exam-qs.component';
import { DbtEditExamQlistComponent } from './components/dbt-edit-exam-qlist/dbt-edit-exam-qlist.component';
import { DbtPricingComponent } from './components/dbt-pricing/dbt-pricing.component';
import { DbtBuyComponent } from './components/dbt-buy/dbt-buy.component';
import { DbtPostListComponent } from './components/dbt-post-list/dbt-post-list.component';
import { DbtUserListComponent } from './components/dbt-user-list/dbt-user-list.component';

import { LaunchExamStartComponent } from './components/examengine/launch-exam-start/launch-exam-start.component';

import { TooltipOverviewExampleComponent } from './components/tooltip-overview-example/tooltip-overview-example.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ThankYouCheckEmailComponent } from './components/thank-you-check-email/thank-you-check-email.component';
import { VideosComponent } from './components/videos/videos.component';
import { MustBeLoggedInComponent } from './components/must-be-logged-in/must-be-logged-in.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'about',
    component: DbtAboutComponent
  },
  {
    path: 'home',
    component: DbtHomeComponent
  },
  {
    path: 'post-list',
    component: DbtPostListComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'list',
    component: DbtListComponent
  },
  {
    path: 'exam/:exam_id',
    component: DbtEditExamComponent
  },
  {
    path: 'exam-qlist/:exam_id',
    component: DbtEditExamQlistComponent
  },
  {
    path: 'exam-qs/:exam_id/:question_id',
    component: DbtEditExamQsComponent
  },
  {
    path: 'user-list',
    component: DbtUserListComponent
  },
  {
    path: 'signUp',
    component: DbtSignUpComponent
  },
  {
    path: 'signIn',
    component: DbtSignInComponent
  },
  {
    path: 'contact',
    component: DbtContactComponent
  },
  {
    path: 'terms',
    component: DbtTermsComponent
  },
  {
    path: 'siteMap',
    component: DbtSitemapComponent
  },
  {
    path: 'forgotPassword',
    component: DbtForgotPasswordComponent
  },
  {
    path: 'pricing',
    component: DbtPricingComponent
  },
  {
    path: 'buy/:plan_id',
    component: DbtBuyComponent
  },
  {
    path: 'examengine/:exam_id',
    component: LaunchExamStartComponent
  },
  {
    path: 'userProfile',
    component: DbtUserProfileComponent
  },
  {
    path: 'thank-you-check-email',
    component: ThankYouCheckEmailComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'logOff',
    component: DbtLogOffComponent
  },
  {
    path: 'mustBeLoggedIn',
    component: MustBeLoggedInComponent
  },
  {
    path: 'tooltip',
    component: TooltipOverviewExampleComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

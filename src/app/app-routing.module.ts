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
import { TooltipOverviewExampleComponent } from './components/tooltip-overview-example/tooltip-overview-example.component';
import { DbtEditExamQsComponent } from './components/dbt-edit-exam-qs/dbt-edit-exam-qs.component';
import { DbtEditExamQlistComponent } from './components/dbt-edit-exam-qlist/dbt-edit-exam-qlist.component';
import { DbtPricingComponent } from './dbt-pricing/dbt-pricing.component';

const routes: Routes = [
  {
    path: 'about',
    component: DbtAboutComponent
  },
  {
    path: 'home',
    component: DbtHomeComponent
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
    path: 'userProfile',
    component: DbtUserProfileComponent
  },
  {
    path: 'logOff',
    component: DbtLogOffComponent
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

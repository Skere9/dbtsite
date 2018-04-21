import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';

import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtLoginComponent } from './components/dbt-login/dbt-login.component';
import { DbtUserProfileComponent } from './components/dbt-user-profile/dbt-user-profile.component';
import { DbtAboutComponent } from './components/dbt-about/dbt-about.component';
import { DbtFooterComponent } from './components/dbt-footer/dbt-footer.component';
import { DbtForgotPasswordComponent } from './components/dbt-forgot-password/dbt-forgot-password.component';
import { DbtContactComponent } from './components/dbt-contact/dbt-contact.component';
import { DbtTermsComponent } from './components/dbt-terms/dbt-terms.component';
import { DbtSitemapComponent } from './components/dbt-sitemap/dbt-sitemap.component';

import { AppWideService } from './services/appwide.service';
import { ExamService } from './services/exam.service';
import { DbtEditExamComponent } from './components/dbt-edit-exam/dbt-edit-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    DbtHomeComponent,
    DbtLoginComponent,
    DbtListComponent,
    DbtUserProfileComponent,
    DbtAboutComponent,
    DbtFooterComponent,
    DbtForgotPasswordComponent,
    DbtContactComponent,
    DbtTermsComponent,
    DbtSitemapComponent,
    DbtEditExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AppWideService,
    ExamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

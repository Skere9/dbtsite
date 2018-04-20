import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtLoginComponent } from './components/dbt-login/dbt-login.component';
import { DbtUserProfileComponent } from './components/dbt-user-profile/dbt-user-profile.component';
import { DbtAboutComponent } from './components/dbt-about/dbt-about.component';
import { DbtFooterComponent } from './components/dbt-footer/dbt-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DbtHomeComponent,
    DbtLoginComponent,
    DbtListComponent,
    DbtUserProfileComponent,
    DbtAboutComponent,
    DbtFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

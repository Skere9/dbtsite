import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtUserProfileComponent } from './dbt-user-profile/dbt-user-profile.component';
import { DbtLoginComponent } from './dbt-login/dbt-login.component';


@NgModule({
  declarations: [
    AppComponent,
    DbtHomeComponent,
    DbtListComponent,
    DbtUserProfileComponent,
    DbtLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

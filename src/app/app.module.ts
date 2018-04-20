import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DbtHomeComponent,
    DbtListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

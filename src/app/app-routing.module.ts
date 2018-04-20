import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DbtHomeComponent } from './components/dbt-home/dbt-home.component';
import { DbtListComponent } from './components/dbt-list/dbt-list.component';
import { DbtAboutComponent } from './components/dbt-about/dbt-about.component';
import { DbtLoginComponent } from './components/dbt-login/dbt-login.component';
import { DbtUserProfileComponent } from './components/dbt-user-profile/dbt-user-profile.component';

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
    path: 'login',
    component: DbtLoginComponent
  },
  {
    path: 'user-profile',
    component: DbtUserProfileComponent
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

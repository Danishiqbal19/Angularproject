import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStaysComponent } from './home-stays/home-stays.component';
import { HolidayPackagesComponent } from './holiday-packages/holiday-packages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:"user-list",component:UserListComponent},
  {path:"create-user",component:CreateUserComponent},
  {path:"",redirectTo:'/user-list',pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

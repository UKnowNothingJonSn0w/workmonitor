import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
import { TaskComponent } from './task/task.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TodoComponent } from './todo/todo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';








@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AdministrationComponent,
    DashboardComponent,
    HarmonogramComponent,
    TaskComponent,
    RatingsComponent,
    TodoComponent,
    ProfileComponent,
    LogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    

  ],
  providers: [PagesComponent],
})
export class PagesModule { }
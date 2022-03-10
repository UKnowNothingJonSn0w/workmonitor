import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';










const routes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'administration', component: AdministrationComponent},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'harmonogram', component: HarmonogramComponent},
        { path: 'ratings', component: RatingsComponent},
        { path: 'task', component: TaskComponent},
        { path: 'todo', component: TodoComponent},
        { path: 'profile', component: ProfileComponent},
        { path: 'logout', component: LogoutComponent},



    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

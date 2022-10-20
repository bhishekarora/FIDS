import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usersListComponent } from './components/users-list/users-list.component';
import { userDetailsComponent } from './components/user-details/user-details.component';
import { AdduserComponent } from './components/add-user/add-user.component';
import {loginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BroadcastComponent } from './components/broadcast/broadcast.component';
const routes: Routes = [
  { path: '', component: loginComponent},
  { path: 'users', canActivate:[AuthGuard],component: usersListComponent },
  { path: 'users/:id', component: userDetailsComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'broadcast', component: BroadcastComponent },
  
  { path: '**', redirectTo: '' },
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

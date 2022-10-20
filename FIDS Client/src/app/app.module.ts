import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/add-user/add-user.component';
import { userDetailsComponent } from './components/user-details/user-details.component';
import { usersListComponent } from './components/users-list/users-list.component';
import { loginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BroadcastComponent } from './components/broadcast/broadcast.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    userDetailsComponent,
    usersListComponent,
    loginComponent,
    DashboardComponent,
    BroadcastComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        headerName:"x-access-token",
        authScheme:"",
        skipWhenExpired: true,
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
             allowedDomains: ['localhost:8080'],
             disallowedRoutes: ['localhost:8080/api/auth/signin']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

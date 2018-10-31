import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import {MatExpansionModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';


const appRoute: Routes  = [

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    HeaderComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoute), AppRoutingModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,MatExpansionModule,MatTabsModule,
    MatTableModule, MatButtonModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,  MatFormFieldModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,MatPaginatorModule, MatSortModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

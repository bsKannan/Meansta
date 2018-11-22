import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,MatMenuModule,
         MatButtonModule,
         MatCardModule ,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatRadioModule,
         MatOptionModule,
         MatSelectModule, MatSidenavModule, MatIconModule, MatListModule,
         MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ServiceService } from '../app/service.service';
import { UserComponent } from './user/user.component'
const routes:Routes =[
  { 
    path : 'home',
    component:HomeComponent
},
{
  path: 'register',
  component:RegistrationFormComponent
},
{ 
  path: 'login',
  component:LoginComponent
},
{
  path:'user',
  component:UserComponent
}

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationFormComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes),
 
  ],
  providers: [ServiceService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }

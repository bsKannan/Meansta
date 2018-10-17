import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { IssueService } from './issue.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule,
 MatFormFieldModule,
 MatInputModule,
 MatOptionModule,
 MatSelectModule,
 MatIconModule,
 MatButtonModule,
 MatCardModule,
 MatTableModule,
 MatDividerModule,
 MatSnackBarModule } from '@angular/material';


 import {   MatPaginatorModule,  MatSortModule } from '@angular/material';



const route: Routes = [
 { path: 'create', component: CreateComponent },
 { path: 'edit/:id', component: EditComponent },
 { path: 'list', component: ListComponent },
 { path: '', redirectTo: '/list', pathMatch: 'full'}
];
@NgModule({
 declarations: [
   AppComponent,
   ListComponent,
   CreateComponent,
   EditComponent,

 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot(route),
   BrowserAnimationsModule,
   MatToolbarModule,
   FormsModule,
   ReactiveFormsModule,
     MatFormFieldModule,
     MatInputModule,
     MatOptionModule,
     MatSelectModule,
     MatIconModule,
     MatButtonModule,
     MatCardModule,
     MatTableModule,
     MatDividerModule,
     MatSnackBarModule,
     HttpClientModule,
  MatPaginatorModule,  MatSortModule

 ],
 providers: [IssueService],
 bootstrap: [AppComponent]
})
export class AppModule { }





















// import { BrowserModule } from '@angular/platform-browser';
// //import { NgModule } from '@angular/core';
// import { NgModule} from '@angular/core';
// import { RouterModule,Routes } from '@angular/router';
// //import { MatToolbarModule } from '@angular/material';
// import {HttpClientModule} from '@angular/common/http';

// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';


// import { MatToolbarModule,  
//   MatOptionModule, 
//   MatSelectModule, 
//   MatIconModule, 
//   MatButtonModule, 
//   MatCardModule, 
//   MatTableModule, 
//   MatDividerModule, 
//   MatSnackBarModule,
//   MatAutocompleteModule } from '@angular/material';

// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ListComponent } from './components/list/list.component';
// import { CreateComponent } from './components/create/create.component';
// import { EditComponent } from './components/edit/edit.component';
// import { IssueService } from './issue.service';
// //import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// //import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// const routes:Routes = [
//   { path:'create', component: CreateComponent },
//   { path:'edit/:id', component: EditComponent },
//   { path:'list', component: ListComponent },
//   { path:'',redirectTo: '/list', pathMatch: 'full'}
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     CreateComponent,
//     EditComponent,
//     ListComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     RouterModule.forRoot(routes),
//     HttpClientModule,
//     ReactiveFormsModule,
//     FormsModule,
//     MatToolbarModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatOptionModule,
//     MatSelectModule,
//     MatIconModule,
//     MatButtonModule,
//     MatCardModule,
//     MatTableModule,
//     MatDividerModule,
//     MatSnackBarModule,
//     MatAutocompleteModule,
//   ],
//   providers: [IssueService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

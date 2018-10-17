import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CoinService } from './coin.service';

export const routes : Routes = [
  { path:'create',
    component:CreateComponent
  }, 
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'index',
    component:IndexComponent
  }
]




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//importing the routes for my applicaiton.. atleast for this module.

import {root_routes_in_my_application} from './app.routes';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    QuestionBankComponent,
    CreateTestComponent,
    TakeTestComponent,
  ],
  imports: [
    BrowserModule,AdminModule,RouterModule.forRoot(root_routes_in_my_application)
  ],
  // 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

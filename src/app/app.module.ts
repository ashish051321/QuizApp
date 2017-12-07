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
import { ManageTestComponent } from './manage-test/manage-test.component';
import { CompletedTestsComponent } from './manage-test/completed-tests/completed-tests.component';
import { RemainingTestsComponent } from './manage-test/remaining-tests/remaining-tests.component';
import { TestStatsComponent } from './manage-test/test-stats/test-stats.component';
import { CompComponent } from './comp/comp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    QuestionBankComponent,
    CreateTestComponent,
    TakeTestComponent,
    ManageTestComponent,
    CompletedTestsComponent,
    RemainingTestsComponent,
    TestStatsComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(root_routes_in_my_application)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

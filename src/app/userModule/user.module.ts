import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';



//importing the routes for my applicaiton.. atleast for this module.


const mychildroutes:Routes = [
    {}];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,RouterModule.forChild(mychildroutes)
  ],
  providers: [],

})
export class UserModule { }

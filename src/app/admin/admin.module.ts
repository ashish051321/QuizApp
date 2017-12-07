import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTestComponent } from './manage-test/manage-test.component';
import { CompletedTestsComponent } from './manage-test/completed-tests/completed-tests.component';
import { RemainingTestsComponent } from './manage-test/remaining-tests/remaining-tests.component';
import { TestStatsComponent } from './manage-test/test-stats/test-stats.component';

import {AdminRoutingModule} from './admin.module.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    ManageTestComponent,
    CompletedTestsComponent,
    RemainingTestsComponent,
    TestStatsComponent
  ]

})
export class AdminModule { }

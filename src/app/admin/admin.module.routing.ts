import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageTestComponent } from './manage-test/manage-test.component';
import { CompletedTestsComponent } from './manage-test/completed-tests/completed-tests.component';
import { RemainingTestsComponent } from './manage-test/remaining-tests/remaining-tests.component';
import { TestStatsComponent } from './manage-test/test-stats/test-stats.component';


const myRoutes: Routes = [

    {
        path: "managetestresults", component:ManageTestComponent,
        children: [
            { path: "", component: ManageTestComponent},
            { path: "completedtests", component: CompletedTestsComponent,outlet: 'managetestoutlet'},
            { path: "remainingtests", component: RemainingTestsComponent, outlet: 'managetestoutlet' },
            { path: "teststats", component: TestStatsComponent , outlet: 'managetestoutlet2'},
            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
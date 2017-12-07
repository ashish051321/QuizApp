import { Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { QuestionBankComponent } from './question-bank/question-bank.component'
import { CreateTestComponent } from './create-test/create-test.component'
import { TakeTestComponent } from './take-test/take-test.component'
import { ManageTestComponent } from './manage-test/manage-test.component'
import { RemainingTestsComponent } from './manage-test/remaining-tests/remaining-tests.component';
import { CompletedTestsComponent } from './manage-test/completed-tests/completed-tests.component';
import { TestStatsComponent } from './manage-test/test-stats/test-stats.component';


export const root_routes_in_my_application: Routes = [
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "qbank", component: QuestionBankComponent },
    { path: "createtest", component: CreateTestComponent },
    { path: "taketest", component: TakeTestComponent },
    {
        path: "managetestresults",
        children: [
            {
                path:'',
                component: ManageTestComponent
            },
            {
                path:'remainingtests',
                component: RemainingTestsComponent
            },
            {
                path:'completedtests',
                component: CompletedTestsComponent
            },
            {
                path:'teststats',
                component: TestStatsComponent
            }
        ]

    },
    { path: "**", component: PageNotFoundComponent },
];

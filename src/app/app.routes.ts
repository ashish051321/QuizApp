import { Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { QuestionBankComponent } from './question-bank/question-bank.component'
import { CreateTestComponent } from './create-test/create-test.component'
import { TakeTestComponent } from './take-test/take-test.component'
import { NiceTestComponent } from './nice-test/nice-test.component';
import { SomeColaComponent } from './some-cola/some-cola.component';


export const root_routes_in_my_application: Routes = [
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "qbank", component: QuestionBankComponent },
    { path: "createtest", component: CreateTestComponent,
children:[
    {path:'getnicetest' , component:NiceTestComponent,outlet:'testsite'},
    {path:'getsomecola' , component:SomeColaComponent,outlet:'recreationsite'}
] },
    { path: "taketest", component: TakeTestComponent },
    { path: "**", component: PageNotFoundComponent },
];

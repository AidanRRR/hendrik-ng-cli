import { KunstenaarsDetailComponent } from './pages/kunstenaars-detail/kunstenaars-detail.component';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KunstenaarsComponent } from "./pages/kunstenaars/kunstenaars.component";

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'kunstenaars',
        component: KunstenaarsComponent
    },
    {
        path: 'kunstenaar/:priref',
        component: KunstenaarsDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

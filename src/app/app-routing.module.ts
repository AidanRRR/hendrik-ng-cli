import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KunstenaarsComponent } from "./pages/kunstenaars/kunstenaars.component";

const routes: Routes = [
    { path: 'kunstenaars', component: KunstenaarsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

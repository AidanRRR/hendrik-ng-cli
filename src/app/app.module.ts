import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

import { KunstenaarService } from './services/kunstenaar-service';
import { KunstenaarsComponent } from './pages/kunstenaars/kunstenaars.component';
import { KunstenaarsDetailComponent } from './pages/kunstenaars-detail/kunstenaars-detail.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    KunstenaarsComponent,
    KunstenaarsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    //eInMemoryWebApiModule.forRoot(KunstenaarService),
  ],
  providers: [KunstenaarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

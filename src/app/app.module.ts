import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AUTH_API_URL, STORE_API_URL} from "./models/app-injections-tokens";
import {environments} from "../enviroments/enviromen";
import {ReportsService} from "../services/reports.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environments.authApi
  },

    {
      provide: ReportsService
    },
    {
      provide: STORE_API_URL,
      useValue: environments.authApi,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

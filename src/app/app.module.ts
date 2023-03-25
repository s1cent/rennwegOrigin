import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbAccordionModule, NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MakeTemplatePropsRef } from '../lib/MakeTemplatePropsRef';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { TeamComponent } from './team/team.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HttpClientModule } from '@angular/common/http';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import {environment} from "../environments/environment";
import { ChronikComponent } from './chronik/chronik.component';
import { VorstandComponent } from './vorstand/vorstand.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import {SafePipe} from "./team/safe.pipe";
import { MitgliedComponent } from './mitglied/mitglied.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    TrainerComponent,
    ChronikComponent,
    VorstandComponent,
    SponsorComponent, SafePipe, MitgliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    NgbAccordionModule,
    NgbTooltipModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  providers: [ MakeTemplatePropsRef,
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

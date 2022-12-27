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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    NgbAccordionModule,
    NgbTooltipModule
  ],
  providers: [ MakeTemplatePropsRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }

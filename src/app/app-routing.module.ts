import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TeamComponent} from "./team/team.component";
import {TrainerComponent} from "./trainer/trainer.component";
import {ChronikComponent} from "./chronik/chronik.component";
import {VorstandComponent} from "./vorstand/vorstand.component";
import {SponsorComponent} from "./sponsor/sponsor.component";
import {MitgliedComponent} from "./mitglied/mitglied.component";

const routes: Routes =[
  { path: 'home',             component: HomeComponent },
  { path: 'team/:id/:name',             component: TeamComponent },
  { path: 'trainer',             component: TrainerComponent },
  { path: 'chronik',             component: ChronikComponent },
  { path: 'vorstand',             component: VorstandComponent },
  { path: 'sponsor',             component: SponsorComponent },
  { path: 'mitglied',             component: MitgliedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      useHash: true,
    onSameUrlNavigation: 'reload'
    })
  ]
})
export class AppRoutingModule { }

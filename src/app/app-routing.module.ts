import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TeamComponent} from "./team/team.component";
import {TrainerComponent} from "./trainer/trainer.component";

const routes: Routes =[
  { path: 'home',             component: HomeComponent },
  { path: 'team/:id',             component: TeamComponent },
  { path: 'trainer',             component: TrainerComponent },
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

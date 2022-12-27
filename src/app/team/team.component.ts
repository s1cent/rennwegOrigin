import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgbAccordionModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import * as Console from "console";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  id: string
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  teamName: String;
  table: String;
  games: String;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log( this.route.snapshot.paramMap.get('id'))
    this.route.params.subscribe(res => {
      if (+res.id === 1){
        this.teamName = "Unsere Kampfmannschaft"
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Spiele"
      } // 'id' here is an example url parameter
    else{
        this.teamName = "Unsere U23 / Reserve"
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Spiele"
      }

    })
  }

  ngOnChanges() {
    console.log( this.route.snapshot.paramMap.get('id'))

  }

}

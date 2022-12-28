import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgbAccordionModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import * as Console from "console";
import {Observable} from "rxjs";
import {Test, testAttributesMapping} from "../model/test.model";
import {Team, teamAttributesMapping} from "../model/team.model";
import {environment} from "../../environments/environment";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {map} from "rxjs/operators";
import {Zeiten, zeitenAttributesMapping} from "../model/trainingszeiten.model";
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  id: number;
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  teamName: String;
  table: String;
  games: String;

  team$: Observable<Team[]>;
  torMann$: Observable<Team[]>;
  verteidiger$: Observable<Team[]>;
  mittelFeld$: Observable<Team[]>;
  sturm$: Observable<Team[]>;

  times$: Observable<Zeiten[]>;
  timesKampf$: Observable<Zeiten[]>;
  timesRes$: Observable<Zeiten[]>;

  constructor(private route: ActivatedRoute, private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      if (+res.id === 1){
        this.id = +res.id;
        this.teamName = "Unsere Kampfmannschaft"
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Spiele"
      }
    else{
        this.id = +res.id;
        this.teamName = "Unsere U23 / Reserve"
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Spiele"
      }

      this.team$ = this.id === 1 ?
        this.googleSheetsDbService.get<Team>(environment.kampfMannschaft.spreadsheetId, environment.kampfMannschaft.worksheetName, teamAttributesMapping) :
        this.googleSheetsDbService.get<Team>(environment.reserve.spreadsheetId, environment.reserve.worksheetName, teamAttributesMapping);

      this.times$ = this.googleSheetsDbService.get<Zeiten>(environment.kampfMannschaft.spreadsheetId, environment.zeiten.worksheetName, zeitenAttributesMapping)

      this.torMann$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Tormann')))
      this.verteidiger$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Verteidiger')))
      this.mittelFeld$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Mittelfeld')))
      this.sturm$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Stürmer')))

      this.timesKampf$ =  this.id === 1 ?
        this.times$.pipe(map(zeiten => zeiten.filter(zeit => zeit.mannschaft == 'Kampfmannschaft'))) :
        this.times$.pipe(map(zeiten => zeiten.filter(zeit => zeit.mannschaft == 'Reserve')))

    })
  }

  getPic(pic: string, name:string) {
    console.log(pic + " - " + name)
    return pic === '-' ? "assets/img/avatar.png" : pic;
  }
}

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
  kmOrRes: boolean;

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
      this.id = +res.id;
      this.teamName = "Unsere " + res.name
      this.kmOrRes = +res.id < 3;

      if (+res.id === 1){
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/KM/Spiele"
      }
    else if (+res.id === 2){
        this.table = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Tabellen"
        this.games = "https://vereine.oefb.at/RennwegerSV/Mannschaften/Saison-2022-23/Res/Spiele"
      }

      this.team$ =
        this.googleSheetsDbService.get<Team>(environment.team.spreadsheetId, res.name, teamAttributesMapping)

      this.times$ = this.googleSheetsDbService.get<Zeiten>(environment.team.spreadsheetId, environment.zeiten.worksheetName, zeitenAttributesMapping)

      this.torMann$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Tormann')))
      this.verteidiger$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Verteidiger')))
      this.mittelFeld$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Mittelfeld')))
      this.sturm$ = this.team$.pipe(map(players => players.filter(player => player.position == 'Stürmer')))

      this.timesKampf$ =
        this.times$.pipe(map(zeiten => zeiten.filter(zeit => zeit.mannschaft == res.name )))

    })
  }

  getPic(pic: string, name:string) {
    console.log(pic + " - " + name)
    return pic === '-' ? "assets/img/avatar.png" : pic;
  }

  getTemPic(name) {
    if('assets/img/' + name.id)
    {

    }
    return name.pic === '-' ? 'assets/img/' + name.id : name.pic
  }
}

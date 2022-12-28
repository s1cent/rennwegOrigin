import { Component } from '@angular/core';
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {Observable} from "rxjs";
import {Trainer, trainerAttributesMapping} from "../model/trainer.model";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {
  trainer$: Observable<Trainer[]>;
  trainerKampf$: Observable<Trainer[]>;
  trainerReserve$: Observable<Trainer[]>;
  trainerJugend$: Observable<Trainer[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.trainer$ = this.googleSheetsDbService.get<Trainer>(environment.trainer.spreadsheetId, environment.trainer.worksheetName, trainerAttributesMapping);

    this.trainerKampf$ = this.trainer$.pipe(map(players => players.filter(player => player.position == 'Kampfmannschaft')))
    this.trainerReserve$ = this.trainer$.pipe(map(players => players.filter(player => player.position == 'Reserve')))
    this.trainerJugend$ = this.trainer$.pipe(map(players => players.filter(player => player.position == 'Jugend')))
  }

}

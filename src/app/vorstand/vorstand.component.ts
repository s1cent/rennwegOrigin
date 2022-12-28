import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {News, newsAttributesMapping} from "../model/news.model";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {environment} from "../../environments/environment";
import {Vorstand, vorstandAttributesMapping} from "../model/vorstand.model";

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.css']
})
export class VorstandComponent {
  vorstand$: Observable<Vorstand[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.vorstand$ = this.googleSheetsDbService.get<Vorstand>(environment.vorstand.spreadsheetId, environment.vorstand.worksheetName, vorstandAttributesMapping);

  }
}

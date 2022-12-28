import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {News, newsAttributesMapping} from "../model/news.model";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {environment} from "../../environments/environment";
import {Chronik, chronikAttributesMapping} from "../model/chronik.model";

@Component({
  selector: 'app-chronik',
  templateUrl: './chronik.component.html',
  styleUrls: ['./chronik.component.css']
})
export class ChronikComponent {
  active = 1;
  chronik$: Observable<Chronik[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.chronik$ = this.googleSheetsDbService.get<Chronik>(environment.chronik.spreadsheetId, environment.chronik.worksheetName, chronikAttributesMapping);

  }
}

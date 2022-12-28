import { Component, OnInit } from '@angular/core';
import {Trainer, trainerAttributesMapping} from "../model/trainer.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {News, newsAttributesMapping} from "../model/news.model";
import {GoogleSheetsDbService} from "ng-google-sheets-db";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<News[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.news$ = this.googleSheetsDbService.get<News>(environment.news.spreadsheetId, environment.news.worksheetName, newsAttributesMapping);

  }

}

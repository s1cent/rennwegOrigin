import { Component } from '@angular/core';
import {News} from "../model/news.model";
import {environment} from "../../environments/environment";
import {Sponsor, sponsorAttributesMapping} from "../model/sponsor.model";
import {Observable} from "rxjs";
import {GoogleSheetsDbService} from "ng-google-sheets-db";

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  products: Observable<Sponsor[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(){
  this.products = this.googleSheetsDbService.get<News>(environment.sponsor.spreadsheetId, environment.sponsor.worksheetName, sponsorAttributesMapping);
}

}

import { Component, OnInit } from '@angular/core';
import {Trainer, trainerAttributesMapping} from "../model/trainer.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {News, newsAttributesMapping} from "../model/news.model";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<News[]>;
  closeResult: string;
  constructor(private googleSheetsDbService: GoogleSheetsDbService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.news$ = this.googleSheetsDbService.get<News>(environment.news.spreadsheetId, environment.news.worksheetName, newsAttributesMapping);

  }
  news:any;
  open(content, type, modalDimension, test) {
    this.news = test;
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true}).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content,{ centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }
  }

}

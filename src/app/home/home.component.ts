import { Component, OnInit } from '@angular/core';
import {Trainer, trainerAttributesMapping} from "../model/trainer.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {News, newsAttributesMapping} from "../model/news.model";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Sponsor, sponsorAttributesMapping} from "../model/sponsor.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<News[]>;
  closeResult: string;
  responsiveOptions: any[];
  constructor(private googleSheetsDbService: GoogleSheetsDbService,private modalService: NgbModal) { }
  products: Observable<Sponsor[]>;

  ngOnInit(): void {
    this.news$ = this.googleSheetsDbService.get<News>(environment.news.spreadsheetId, environment.news.worksheetName, newsAttributesMapping);
    this.products = this.googleSheetsDbService.get<News>(environment.sponsor.spreadsheetId, environment.sponsor.worksheetName, sponsorAttributesMapping);
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

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

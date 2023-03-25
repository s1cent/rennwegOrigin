import {Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {DeviceDetectorService} from "ngx-device-detector";
import {GoogleSheetsDbService} from "ng-google-sheets-db";
import {News, newsAttributesMapping} from "../../model/news.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Sponsor} from "../../model/sponsor.model";
import {teamName, teamNameAttributesMapping} from "../../model/teamNames.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  public isMobile = false;
  teamNames :Observable<teamName[]>;

  constructor(public location: Location, private router: Router, private deviceService: DeviceDetectorService,
              private googleSheetsDbService: GoogleSheetsDbService) { }


  ngOnInit() :void {
    this.teamNames = this.googleSheetsDbService.get<teamName>(environment.teamName.spreadsheetId, environment.teamName.worksheetName, teamNameAttributesMapping);
    if( this.deviceService.isMobile() == true)
    {
      this.isMobile = true;

    }else if(document.body.clientWidth < 992){
      this.isMobile = true;
    }
      else
        this.isMobile = false;

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else
          window.scrollTo(0, 0);
      }
    });
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 992;
    console.log();
  }


}

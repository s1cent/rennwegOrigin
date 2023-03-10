import {Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {DeviceDetectorService} from "ngx-device-detector";

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

  constructor(public location: Location, private router: Router, private deviceService: DeviceDetectorService) { }


  ngOnInit() :void {
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

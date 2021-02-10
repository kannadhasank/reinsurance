import { Component } from '@angular/core';
import { UiService } from './shared/ui.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  constructor(public _uiService: UiService, public router:Router) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
     
        this._uiService.initUIFunctions();

      }
    });



  }

}

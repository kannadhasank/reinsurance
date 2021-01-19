import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor(public _baseService: BaseService) { }

  ngOnInit(): void {
  }

}

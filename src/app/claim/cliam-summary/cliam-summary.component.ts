import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';


@Component({
  selector: 'app-cliam-summary',
  templateUrl: './cliam-summary.component.html',
  styleUrls: ['./cliam-summary.component.scss']
})
export class CliamSummaryComponent implements OnInit {

  constructor(public _baseService: BaseService) { }

  ngOnInit(): void {
  

  }

delete(i){
  this._baseService.tableArray.splice(i,1)

}
}

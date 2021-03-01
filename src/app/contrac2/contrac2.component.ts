import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared/base.service';

@Component({
  selector: 'app-contrac2',
  templateUrl: './contrac2.component.html',
  styleUrls: ['./contrac2.component.scss']
})
export class Contrac2Component implements OnInit {

  constructor(public _baseService: BaseService) { }

  ngOnInit(): void {
  }
  delete(i){
    this._baseService.tableArray.splice(i,1)
  
  }
}

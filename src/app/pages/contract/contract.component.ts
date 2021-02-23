import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../shared/base.service';
declare var $:any;


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  constructor(
    public _baseService: BaseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    $('[data-toggle="popover"]').popover();

  }

delete(i){
  this._baseService.tableArray.splice(i,1)
}

copyContract(){
  this.router.navigate(['/dashboard/create-contract']);
}

}

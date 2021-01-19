import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrls: ['./search-contract.component.scss']
})
export class SearchContractComponent implements OnInit {

  constructor(public _baseService: BaseService) { }

  ngOnInit(): void {
  }

}

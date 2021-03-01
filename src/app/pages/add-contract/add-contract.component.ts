import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  constructor(public _baseService: BaseService) { }

  ngOnInit(): void {
  }

}

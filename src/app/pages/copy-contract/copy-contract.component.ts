import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-contract',
  templateUrl: './copy-contract.component.html',
  styleUrls: ['./copy-contract.component.scss']
})
export class CopyContractComponent implements OnInit {

  contractName;
  IsCopyLayer: boolean = false;
  contractNames: { name: string;}[];
  countries: { name: string; code: string; }[];
  selectedCountry: string;

  constructor() { }

  ngOnInit(): void {
    
    this.contractNames = [
      {name: 'CAT'},
      {name: 'CPP-CAT'},
      {name: 'PPL'}
  ];
  this.countries = [
    {name: 'Australia', code: 'AU'},
    {name: 'Brazil', code: 'BR'},
    {name: 'China', code: 'CN'},
    {name: 'Egypt', code: 'EG'},
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'India', code: 'IN'},
    {name: 'Japan', code: 'JP'},
    {name: 'Spain', code: 'ES'},
    {name: 'United States', code: 'US'}
];
  }

}

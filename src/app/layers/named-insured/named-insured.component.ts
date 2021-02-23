import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-named-insured',
  templateUrl: './named-insured.component.html',
  styleUrls: ['./named-insured.component.scss']
})
export class NamedInsuredComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['namedInsureds', 'primaryInsured', 'action'];
  dataSource;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {namedInsureds: 'Test', primaryInsured: 'Test', action: ''}
    ];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contract } from 'src/app/models/contract.model';
import { ContractComponent } from '../contract/contract.component';

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.scss']
})
export class AllContractsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns = [
    { columnDef: 'contractCode', header: 'Contract Code' },
    { columnDef: 'contractName', header: 'Contract Name' },
    { columnDef: 'effectiveDate', header: 'Effective Date' },
    { columnDef: 'expirationDate', header: 'Expiration Date' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'action', header: 'Action' }
  ];
  dataSource: MatTableDataSource<Contract>;
  contractData;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.contractData = [
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 1",
        "effectiveDate": "02/15/2022",
        "expirationDate": "02/16/2022",
        "status": "Active"
      },
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 2",
        "effectiveDate": "02/15/2021",
        "expirationDate": "02/16/2022",
        "status": "Pending"
      },
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 3",
        "effectiveDate": "02/15/2021",
        "expirationDate": "02/16/2022",
        "status": "Active"
      },
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 3",
        "effectiveDate": "02/15/2021",
        "expirationDate": "02/16/2022",
        "status": "Active"
      },
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 4",
        "effectiveDate": "02/15/2021",
        "expirationDate": "02/16/2022",
        "status": "Active"
      },
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 4",
        "effectiveDate": "02/15/2021",
        "expirationDate": "02/16/2022",
        "status": "Active"
      }
    ];
    this.dataSource = new MatTableDataSource(this.contractData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  copyContract() {
    this.router.navigate(['/dashboard/create-contract']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

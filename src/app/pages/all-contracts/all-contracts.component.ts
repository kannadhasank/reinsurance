import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.scss']
})
export class AllContractsComponent implements OnInit {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['contractCode', 'uwYear', 'formerCode', 'contractName', 'effectiveDate', 'expirationDate', 'status', 'action'];
  dataSource;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource = [
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' },
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' }
    ];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  copyContract(){
    this.router.navigate(['/dashboard/create-contract']);
  }

}

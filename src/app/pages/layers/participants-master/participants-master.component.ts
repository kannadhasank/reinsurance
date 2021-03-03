import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contract } from 'src/app/models/contract.model';

@Component({
  selector: 'app-participants-master',
  templateUrl: './participants-master.component.html',
  styleUrls: ['./participants-master.component.scss']
})
export class ParticipantsMasterComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns: any[] = ['contractCode', 'contractName', 'effectiveDate', 'expirationDate', 'status', 'action'];
  dataSource: MatTableDataSource<Contract>;
  contractData;
  showUpdateBtn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.contractData = [
      {
        "contractCode": "CPP-CAT",
        "contractName": "Test Contract 1",
        "effectiveDate": "02/15/2021",
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
      }
    ];
    this.dataSource = new MatTableDataSource(this.contractData);
    this.showUpdateBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editParticipant(){
    this.showUpdateBtn = true;
  }

  updateParticipant(){
    this.showUpdateBtn = false;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("value = " + filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("ds = " + this.dataSource.filter)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}

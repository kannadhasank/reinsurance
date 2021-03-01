import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-participants-master',
  templateUrl: './participants-master.component.html',
  styleUrls: ['./participants-master.component.scss']
})
export class ParticipantsMasterComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['contractCode', 'uwYear', 'formerCode', 'contractName', 'effectiveDate', 'expirationDate', 'status', 'action'];
  dataSource;
  showUpdateBtn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      { contractCode: 'CPP-CAT', uwYear: '2020', formerCode: 'Test', contractName: 'Test Contract', effectiveDate: '02/15/2021', expirationDate: '02/16/2022', status: 'Active', action: '' }
    ];
    this.showUpdateBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editParticipant() {
    this.showUpdateBtn = true;
  }

  updateParticipant() {
    this.showUpdateBtn = false;
  }

}

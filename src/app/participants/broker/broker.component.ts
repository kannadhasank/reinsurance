import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Broker } from 'src/app/models/broker.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit, AfterViewInit {

  brokerForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns = [
    {columnDef: 'brokerName', header: 'Broker Name'},
    {columnDef: 'brokerLocation', header: 'Broker Location'},
    {columnDef: 'inCorporationLocation', header: 'Incorporation Location'},
    {columnDef: 'federalID', header: 'Federal ID'},
    {columnDef: 'action', header: 'Action'}
  ];
  dataSource: MatTableDataSource<Broker>;
  showUpdateBrokerBtn: boolean;
  brokerdata;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.brokerForm = this.fb.group({
      'brokerName': [''],
      'brokerLocation': [''],
      'inCorporationLocation': [''],
      'federalID': ['']
    });
    this.brokerdata = [
      {
        "brokerName": "Test",
        "brokerLocation": "Test Loc",
        "inCorporationLocation": "Test",
        "federalID": "Test"
      },
      {
        "brokerName": "Test 1",
        "brokerLocation": "Test Loc 1",
        "inCorporationLocation": "Test",
        "federalID": "Test 12"
      }
    ]
    this.dataSource = new MatTableDataSource(this.brokerdata);
    this.showUpdateBrokerBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editBroker() {
    this.showUpdateBrokerBtn = true;
  }

  updateBroker() {
    this.showUpdateBrokerBtn = false;
  }

  deleteBroker() {
    Swal.fire('Success', 'Record deleted successfully!', 'success');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
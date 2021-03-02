import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit, AfterViewInit {

  brokerForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  columns: string[] = ['brokerName', 'brokerLocation', 'inCorporationLocation', 'federalID', 'action'];
  dataSource;
  showUpdateBrokerBtn: boolean;

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
    this.dataSource = [
      { brokerName: 'Test', brokerLocation: 'Test Loc', inCorporationLocation: 'Test', federalID: 'Test', action: '' },
      { brokerName: 'Test', brokerLocation: 'Test Loc', inCorporationLocation: 'Test', federalID: 'Test', action: '' },
      { brokerName: 'Test', brokerLocation: 'Test Loc', inCorporationLocation: 'Test', federalID: 'Test', action: '' }
    ];
    this.showUpdateBrokerBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editBroker(){
    this.showUpdateBrokerBtn = true;
  }

  updateBroker(){
    this.showUpdateBrokerBtn = false;
  }

  deleteBroker(){
    Swal.fire('Success', 'Record deleted successfully!', 'success');
  }

}
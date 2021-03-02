import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reinsurer',
  templateUrl: './reinsurer.component.html',
  styleUrls: ['./reinsurer.component.scss']
})
export class ReinsurerComponent implements OnInit, AfterViewInit {

  reinsurerForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  columns: string[] = ['reinsurerName', 'reinsurerLocation', 'reinsurerCorporationLocation', 'federalID', 'action'];
  dataSource;
  showUpdateRIBtn: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reinsurerForm = this.fb.group({
      'reinsurerName': [''],
      'reinsurerLocation': [''],
      'reinsurerCorporationLocation': [''],
      'federalID': ['']
    });
    this.dataSource = [
      { reinsurerName: 'Test', reinsurerLocation: 'Test Loc', reinsurerCorporationLocation: 'Test', federalID: 'Test', action: '' },
      { reinsurerName: 'Test', reinsurerLocation: 'Test Loc', reinsurerCorporationLocation: 'Test', federalID: 'Test', action: '' },
      { reinsurerName: 'Test', reinsurerLocation: 'Test Loc', reinsurerCorporationLocation: 'Test', federalID: 'Test', action: '' },
      { reinsurerName: 'Test', reinsurerLocation: 'Test Loc', reinsurerCorporationLocation: 'Test', federalID: 'Test', action: '' }
    ];
    this.showUpdateRIBtn = 'Add';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editReInsurer(){
    this.showUpdateRIBtn = 'Update';
  }

  updateReinsurer(){
    this.showUpdateRIBtn = 'Add';
  }

  deleteReinsurer(){
    Swal.fire('Success', 'Record deleted successfully!', 'success');
  }

}
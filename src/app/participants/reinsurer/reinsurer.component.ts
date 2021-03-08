import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reinsurer } from 'src/app/models/reinsurer.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reinsurer',
  templateUrl: './reinsurer.component.html',
  styleUrls: ['./reinsurer.component.scss']
})
export class ReinsurerComponent implements OnInit, AfterViewInit {

  reinsurerForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Reinsurer>;;
  columns = [
    {columnDef: 'reinsurerName', header: 'Reinsurer Name'},
    {columnDef: 'reinsurerLocation', header: 'Reinsurer Location'},
    {columnDef: 'reinsurerCorporationLocation', header: 'Reinsurer Corporation Location'},
    {columnDef: 'federalID', header: 'Federal ID'},
    {columnDef: 'naiccode', header: 'NAIC Code'},
    {columnDef: 'action', header: 'Action'}
  ];
  showUpdateRIBtn: boolean;
  reinsurerData: any;
  displayedColumns = this.columns.map(c => c.columnDef);
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reinsurerForm = this.fb.group({
      'reinsurerName': [''],
      'reinsurerLocation': [''],
      'reinsurerCorporationLocation': [''],
      'federalID': [''],
      'naiccode': ['']
    });
    this.reinsurerData = [
      {
        "reinsurerName": "Test",
        "reinsurerLocation": "Test Loc",
        "reinsurerCorporationLocation": "Test",
        "federalID": "Test",
        "naiccode": "XYZ"
      },
      {
        "reinsurerName": "Test 1",
        "reinsurerLocation": "Test Loc 1",
        "reinsurerCorporationLocation": "Test",
        "federalID": "Test 12",
        "naiccode": "ABC"
      }
    ]
    this.dataSource = new MatTableDataSource(this.reinsurerData);
    this.showUpdateRIBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editReInsurer() {
    this.showUpdateRIBtn = true;
  }

  updateReinsurer() {
    this.showUpdateRIBtn = false;
  }

  deleteReinsurer() {
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
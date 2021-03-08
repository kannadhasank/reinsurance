import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NamedInsured } from 'src/app/models/named-insured.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-named-insured-master',
  templateUrl: './named-insured-master.component.html',
  styleUrls: ['./named-insured-master.component.scss']
})
export class NamedInsuredMasterComponent implements OnInit, AfterViewInit {

  namedInsuredsForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns = [
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'location', header: 'Location' },
    { columnDef: 'action', header: 'Action' }
  ]
  dataSource: MatTableDataSource<NamedInsured>;
  namedInsuredData;
  showUpdateNamedInsuredBtn: boolean;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.namedInsuredsForm = this.fb.group({
      'name': [''],
      'location': ['']
    });
    this.namedInsuredData = [
      {
        "name": "Test",
        "location": "Test Loc",
      },
      {
        "name": "Test",
        "location": "Test Loc",
      }
    ]
    this.dataSource = new MatTableDataSource(this.namedInsuredData);
    this.showUpdateNamedInsuredBtn = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editNamedInsured() {
    this.showUpdateNamedInsuredBtn = true;
  }

  updateNamedInsured() {
    this.showUpdateNamedInsuredBtn = false;
  }

  deleteNamedInsured() {
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

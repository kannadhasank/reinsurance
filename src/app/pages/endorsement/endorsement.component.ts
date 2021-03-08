import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Endorsement } from 'src/app/models/endorsement.model';

@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.scss']
})
export class EndorsementComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns = [
    { columnDef: 'endorsementId', header: 'ID' },
    { columnDef: 'endorsementName', header: 'Name' },
    { columnDef: 'endorsementEffectiveDate', header: 'Endorsement Effective Date' },
    { columnDef: 'createdBy', header: 'Created By' },
    { columnDef: 'approvedBy', header: 'Approved By' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'notes', header: 'Notes' }
  ];
  dataSource: MatTableDataSource<Endorsement>;
  endorsementData: any[];
  displayedColumns = this.columns.map(c => c.columnDef);
  showShortDescription: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showShortDescription = true;
    this.endorsementData = [
      {
        "endorsementId": "Test",
        "endorsementName": "Test Name",
        "endorsementEffectiveDate": "3/4/2021",
        "status": "Approved",
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad excepturi hic perferendis nobis nesciunt quod dignissimos praesentium aliquid mollitia odio, ipsum itaque ducimus laudantium eaque dolorem. Veritatis, repudiandae vero? a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "createdBy": "TES001",
        "approvedBy": "TES003"
      },
      {
        "endorsementId": "Test 1",
        "endorsementName": "Test Name 1",
        "endorsementEffectiveDate": "4/4/2021",
        "status": "Pending",
        "notes": "Test Notes Description",
        "createdBy": "TES001",
        "approvedBy": "TES004"
      },
      {
        "endorsementId": "Test 1",
        "endorsementName": "Test Name 1",
        "endorsementEffectiveDate": "4/4/2021",
        "status": "Rejected",
        "notes": "Test Notes Description",
        "createdBy": "TES001",
        "approvedBy": "TES005"
      }
    ]
    this.dataSource = new MatTableDataSource(this.endorsementData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

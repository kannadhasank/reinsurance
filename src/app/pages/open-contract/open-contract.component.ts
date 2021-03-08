import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-open-contract',
  templateUrl: './open-contract.component.html',
  styleUrls: ['./open-contract.component.scss']
})
export class OpenContractComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Equipment Breakdown', 'Test Contract', 'Test Contract 1'];
  filteredOptions: Observable<string[]>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  openContract() {
    this.router.navigate(['/dashboard/contract-info']);
  }

}

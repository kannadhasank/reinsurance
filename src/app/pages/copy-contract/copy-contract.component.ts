import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-copy-contract',
  templateUrl: './copy-contract.component.html',
  styleUrls: ['./copy-contract.component.scss']
})
export class CopyContractComponent implements OnInit {

  myControl = new FormControl();
  contractName;
  IsCopyLayer: boolean = false;
  options: string[] = ['Equipment Breakdown', 'Test Contract', 'Test Contract 1'];
  filteredOptions: Observable<string[]>;

  constructor() { }

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

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reinsurer',
  templateUrl: './reinsurer.component.html',
  styleUrls: ['./reinsurer.component.scss']
})
export class ReinsurerComponent implements OnInit {

  reinsurerForm: FormGroup

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
  }

}

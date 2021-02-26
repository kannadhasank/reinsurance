import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

  brokerForm: FormGroup

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
  }

}

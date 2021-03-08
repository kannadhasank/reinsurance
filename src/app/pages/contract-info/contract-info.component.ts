import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent implements OnInit {

  contractForm: FormGroup;
  showUpdateBtn: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contractForm = this.fb.group({
      affiliateID: ['', [Validators.required]],
      contractTypeID: ['', [Validators.required]],
      contractCode: ['', [Validators.required]],
      contractName: ['', [Validators.required]],
      renewalTypeCode: ['', [Validators.required]],
      ibnrExclusionFlag: [''],
      effectiveDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      aggregatedClaimMethod: [''],
      reasonForUpdate: ['', [Validators.required]]
    });
    this.showUpdateBtn = false;
    this.contractForm.disable();
  }

  editContract() {
    this.contractForm.enable();
    this.showUpdateBtn = true;
  }

  updateContract() {
    this.showUpdateBtn = false;
    this.contractForm.disable();
  }

}

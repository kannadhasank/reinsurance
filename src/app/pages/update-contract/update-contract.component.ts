import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.scss']
})
export class UpdateContractComponent implements OnInit {

  updateContractForm: FormGroup;
  submitted: boolean = false;
  reasonForUpdate;
  expirationDate;
  effectiveDate;
  affiliateID;
  contractTypeID;
  renewalTypeCode;
  aggregatedClaimMethod;
  contractCodes: { name: string; code: string; }[];

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.submitted = true;
    this.formMethod();
    this.contractCodes = [
      {name: 'Option 1', code: '1'},
      {name: 'Option 2', code: '2'},
      {name: 'Option 3', code: '3'},
  ];
  }

  formMethod() {
    return this.updateContractForm = this.fb.group({
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
  }

  updateContract() {
    console.log(this.updateContractForm.valid)
    if (this.updateContractForm.valid) {
      this.submitted = false;
      // $("#editContractModal").modal("hide");
      Swal.fire('Success', 'Contract Updated!', 'success');
      //this.updateContractForm.reset();
    }
  }

}

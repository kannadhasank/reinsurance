import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.scss']
})
export class UpdateContractComponent implements OnInit {

  updateContractForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formMethod();
  }

  formMethod() {
    return this.updateContractForm = this.fb.group({
      affiliateID: [''],
      contractTypeID: [''],
      contractCode: [''],
      contractName: [''],
      renewalTypeCode: [''],
      ibnrExclusionFlag: [''],
      effectiveDate: [''],
      expirationDate: [''],
      aggregatedClaimMethod: [''],
      reason: ['']
    });
  }

  updateContract(){
    
  }

}

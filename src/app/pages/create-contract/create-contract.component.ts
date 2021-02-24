import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../../shared/base.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  public createForm: FormGroup;
  //showErrorValidationMsg: string;

  constructor(public Fb: FormBuilder, public _baseService: BaseService, public http: HttpClient) { }

  ngOnInit(): void {
    this.createFormMethod();
    //this.showErrorValidationMsg = '';
  }


  createFormMethod() {
    return this.createForm = this.Fb.group({
      affiliateID: ['', [Validators.required]],
      contractTypeID: ['', [Validators.required]],
      contractCode: ['', [Validators.required]],
      contractName: ['', [Validators.required]],
      renewalTypeCode: ['', [Validators.required]],
      ibnrExclusionFlag: [''],
      effectiveDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      aggregatedClaimMethod: ['']

    })
  }

  createContract() {
    console.log("valid/not = "+this.createForm.valid)
    if (this.createForm.invalid) {
     // this.showErrorValidationMsg = "Please enter all mandatory fields";
     Swal.fire('Warning', 'Please fill the required fields', 'warning');
    } else {
     // this.showErrorValidationMsg = '';
      $("createContract").modal('hide');
      Swal.fire('Success', 'Contract Created Successfully', 'success');
      this._baseService.tableArray.push(this.createForm.value);
      this.http.post('10.1.73.171:8080/contract/createContract', this.createForm.value).subscribe(x => {
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../../shared/base.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {
  
public createForm: FormGroup;

  constructor(public Fb: FormBuilder,public _baseService: BaseService) { }

  ngOnInit(): void {
  this.createFormMethod()
  }


createFormMethod(){
 return this.createForm = this.Fb.group({
    ContractAffiliate : new FormControl(''),
    ContractType : new FormControl(''),
    ContractCode : new FormControl(''),
    ContractName : new FormControl(''),
    RenewalType : new FormControl(''),
    IBNRExcluded : new FormControl(''),
    EffectiveDate : new FormControl(''),
    ExpirationDate : new FormControl(''),
    Aggregated : new FormControl(''),
    
  })
}
add(){
  Swal.fire('Success', 'Contract Created!', 'success')
  this._baseService.tableArray.push(this.createForm.value)
}
}

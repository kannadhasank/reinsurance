import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../../shared/base.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {
  
public createForm: FormGroup;

  constructor(public Fb: FormBuilder,public _baseService: BaseService, public http:HttpClient) { }

  ngOnInit(): void {
  this.createFormMethod();
  }


createFormMethod(){
 return this.createForm = this.Fb.group({
  affiliateID : new FormControl(''),
  contractTypeID : new FormControl(''),
  contractCode : new FormControl(''),
  contractName : new FormControl(''),
  renewalTypeCode : new FormControl(''),
  ibnrExclusionFlag : new FormControl(''),
  effectiveDate : new FormControl(''),
  expirationDate : new FormControl(''),
    Aggregated : new FormControl(''),
    
  })
}
add(){
  
  Swal.fire('Success', 'Contract Created!', 'success')
  this._baseService.tableArray.push(this.createForm.value)
  this.http.post('10.1.73.171:8080/contract/createContract',this.createForm.value).subscribe(x=>{
    
  })
}
}

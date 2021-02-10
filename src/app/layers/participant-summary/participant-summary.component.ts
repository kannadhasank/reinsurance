import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../../shared/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-participant-summary',
  templateUrl: './participant-summary.component.html',
  styleUrls: ['./participant-summary.component.scss']
})
export class ParticipantSummaryComponent implements OnInit {

  public createForm: FormGroup;
  constructor(public Fb: FormBuilder,public _baseService: BaseService) { }

  ngOnInit(): void {
  this.createFormMethod()
  }


createFormMethod(){
 return this.createForm = this.Fb.group({
    ContractAffiliate : new FormControl('',[Validators.required]),
    ContractType : new FormControl('' ,[Validators.required]),
    BusinessGroup : new FormControl('',[Validators.required]),
    ContractCode : new FormControl('',[Validators.required]),
    ContractName : new FormControl('',[Validators.required]),
    RenewalType : new FormControl('',[Validators.required]),
    IBNRExcluded : new FormControl('',[Validators.required]),
    EffectiveDate : new FormControl('',[Validators.required]),
    UWYear : new FormControl('',[Validators.required]),
    ExpirationDate : new FormControl('',[Validators.required]),
    AniversaryDate : new FormControl('',[Validators.required]),
    SignatureDate : new FormControl('',[Validators.required]),
    Template : new FormControl(''),
  })
}
add(){
  Swal.fire('Success', 'Contract Created!', 'success')
  this._baseService.tableArray.push(this.createForm.value)
}

}

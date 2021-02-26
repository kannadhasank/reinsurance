import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractComponent } from './pages/contract/contract.component';
import { ParticipantSummaryComponent } from './layers/participant-summary/participant-summary.component';
import { AttachmentGuideComponent } from './layers/attachment-guide/attachment-guide.component';
import { NamedInsuredComponent } from './layers/named-insured/named-insured.component';
import { TermsComponent } from './layers/terms/terms.component';
import { LayerComponent } from './pages/layers/layer/layer.component';
import { HeaderComponent } from './common/header/header.component';
import { CreateContractComponent } from './pages/create-contract/create-contract.component';
import { ContractInfoComponent } from './pages/contract-info/contract-info.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { UpdateContractComponent } from './pages/update-contract/update-contract.component';
import { BrokerComponent } from './pages/participants/broker/broker.component';
import { ReinsurerComponent } from './pages/participants/reinsurer/reinsurer.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/contract', pathMatch: 'full' },
  {
    path: 'dashboard', component: HeaderComponent, children: [
      { path: 'contract', component: ContractComponent },
      //   { path: 'participants', component: ParticipantsMasterComponent },
      { path: 'participant', component: ParticipantSummaryComponent },
      { path: 'attachment', component: AttachmentGuideComponent },
      { path: 'namedInsured', component: NamedInsuredComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'layer-new', component: LayerComponent },
      { path: 'create-contract', component: CreateContractComponent },
      { path: 'contracts', component: AllContractsComponent },
      { path: 'contract-info', component: ContractInfoComponent },
      { path: 'update-contract', component: UpdateContractComponent },
      { path: 'broker', component: BrokerComponent },
      { path: 'reinsurer', component: ReinsurerComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

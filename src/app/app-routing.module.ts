import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserSetupComponent } from './pages/user-setup/user-setup.component';
import { ContractComponent } from './pages/contract/contract.component';
import { LayerSummaryComponent } from './pages/layer-summary/layer-summary.component';
import { Contrac2Component } from './contrac2/contrac2.component';
import { ParticipantsMasterComponent } from './pages/participants-master/participants-master.component';
import { CliamSummaryComponent } from './claim/cliam-summary/cliam-summary.component';
import { ParticipantSummaryComponent } from './layers/participant-summary/participant-summary.component';
import { AttachmentGuideComponent } from './layers/attachment-guide/attachment-guide.component';
import { NamedInsuredComponent } from './layers/named-insured/named-insured.component';
import { TermsComponent } from './layers/terms/terms.component';
import { LayerComponent } from './pages/layers/layer/layer.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/contract', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: UserSetupComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'Layer', component: LayerSummaryComponent },
      { path: 'contract2', component: Contrac2Component },
      { path: 'participants', component: ParticipantsMasterComponent },
      { path: 'claim-summary', component: CliamSummaryComponent },
      { path: 'participant', component: ParticipantSummaryComponent },
      { path: 'attachment', component: AttachmentGuideComponent },
      { path: 'namedInsured', component: NamedInsuredComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'layer-new', component: LayerComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

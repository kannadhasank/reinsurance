import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserSetupComponent } from './pages/user-setup/user-setup.component';
import { ContractComponent } from './pages/contract/contract.component';
import { LayerSummaryComponent } from './pages/layer-summary/layer-summary.component';
import { Contrac2Component } from './contrac2/contrac2.component';
import { ParticipantsMasterComponent } from './pages/participants-master/participants-master.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/contract', pathMatch: 'full'  },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: UserSetupComponent },
    { path: 'contract', component: ContractComponent },
    { path: 'Layer', component: LayerSummaryComponent },
    { path: 'contract2', component: Contrac2Component },
    { path: 'participants', component: ParticipantsMasterComponent }
  ] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

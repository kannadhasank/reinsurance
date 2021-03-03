import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractComponent } from './pages/contract/contract.component';
import { LayerComponent } from './pages/layers/layer/layer.component';
import { HeaderComponent } from './common/header/header.component';
import { CreateContractComponent } from './pages/create-contract/create-contract.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { UpdateContractComponent } from './pages/update-contract/update-contract.component';
import { BrokerComponent } from './participants/broker/broker.component';
import { ReinsurerComponent } from './participants/reinsurer/reinsurer.component';
import { ContractInfoComponent } from './pages/contract-info/contract-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/contracts', pathMatch: 'full' },
  {
    path: 'dashboard', component: HeaderComponent, children: [
      { path: 'contract', component: ContractComponent },
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

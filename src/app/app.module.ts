import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PopoverModule } from "ngx-smart-popover";
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RightSidebarComponent } from './common/right-sidebar/right-sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContractComponent } from './pages/contract/contract.component';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { CreateContractComponent } from './pages/create-contract/create-contract.component';
import { LayerSummaryComponent } from './pages/layer-summary/layer-summary.component';
import { CreateLayerComponent } from './pages/create-layer/create-layer.component';
import { DetailsComponent } from './details/details.component';
import { BillingComponent } from './billing/billing.component';
import { UWdetailsComponent } from './pages/layers/uwdetails/uwdetails.component';
import { LayersAliasComponent } from './pages/layers/layers-alias/layers-alias.component';
import { SettlementDetailsComponent } from './pages/layers/settlement-details/settlement-details.component';
import { ProcessingOptionComponent } from './pages/layers/processing-option/processing-option.component';
import { CoadingConditionComponent } from './pages/layers/coading-condition/coading-condition.component';
import { LayerDetailsComponent } from './pages/layers/layer-details/layer-details.component';
import { PremiumSettlementDetailsComponent } from './pages/layers/premium-settlement-details/premium-settlement-details.component';
import { ParticipantSummaryComponent } from './layers/participant-summary/participant-summary.component';
import { AttachmentGuideComponent } from './layers/attachment-guide/attachment-guide.component';
import { TermsComponent } from './layers/terms/terms.component';
import { NamedInsuredComponent } from './layers/named-insured/named-insured.component';
import { AddParticipantComponent } from './participants/add-participant/add-participant.component';
import { ReinsurerComponent } from './participants/reinsurer/reinsurer.component';
import { CliamSummaryComponent } from './claim/cliam-summary/cliam-summary.component';
import { CliamCreateComponent } from './claim/cliam-create/cliam-create.component';
import { CopyContractComponent } from './pages/copy-contract/copy-contract.component';
import { RenewContractComponent } from './pages/renew-contract/renew-contract.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContractComponent } from './pages/update-contract/update-contract.component';
import { LayerComponent } from './pages/layers/layer/layer.component';
import { ContractInfoComponent } from './pages/contract-info/contract-info.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { BrokerComponent } from './participants/broker/broker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    LoginComponent,
    DashboardComponent,
    ContractComponent,
    AddContractComponent,
    CreateContractComponent,
    LayerSummaryComponent,
    CreateLayerComponent,
    DetailsComponent,
    BillingComponent,
    UWdetailsComponent,
    LayersAliasComponent,
    SettlementDetailsComponent,
    ProcessingOptionComponent,
    CoadingConditionComponent,
    LayerDetailsComponent,
    PremiumSettlementDetailsComponent,
    ParticipantSummaryComponent,
    AttachmentGuideComponent,
    TermsComponent,
    NamedInsuredComponent,
    AddParticipantComponent,
    ReinsurerComponent,
    CliamSummaryComponent,
    CliamCreateComponent,
    CopyContractComponent,
    RenewContractComponent,
    LayerComponent,
    ContractInfoComponent,
    AllContractsComponent,
    BrokerComponent,
    UpdateContractComponent,
    LayerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatListModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

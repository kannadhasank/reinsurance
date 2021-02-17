import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { PopoverModule } from "ngx-smart-popover";
import { DataTablesModule } from 'angular-datatables';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftSidebarComponent } from './common/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './common/right-sidebar/right-sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserSetupComponent } from './pages/user-setup/user-setup.component';
import { ContractComponent } from './pages/contract/contract.component';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { SearchContractComponent } from './pages/search-contract/search-contract.component';
import { SearchContractTabComponent } from './pages/search-contract-tab/search-contract-tab.component';
import { SearchContractLayerComponent } from './pages/search-contract-layer/search-contract-layer.component';
import { SearchContractOtherComponent } from './pages/search-contract-other/search-contract-other.component';
import { CreateContractComponent } from './pages/create-contract/create-contract.component';
import { LayerSummaryComponent } from './pages/layer-summary/layer-summary.component';
import { CreateLayerComponent } from './pages/create-layer/create-layer.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { BasicTableComponent } from './pages/basic-table/basic-table.component';
import { Contrac2Component } from './contrac2/contrac2.component';
import { CreateContract2Component } from './create-contract2/create-contract2.component';
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
import { ParticipantsMasterComponent } from './pages/participants-master/participants-master.component';
import { AddParticipantComponent } from './participants-master/add-participant/add-participant.component';
import { ReinsurerComponent } from './participants-master/reinsurer/reinsurer.component';
import { ContactPreferenceComponent } from './participants-master/contact-preference/contact-preference.component';
import { ContactComponent } from './participants-master/contact/contact.component';
import { CliamSummaryComponent } from './claim/cliam-summary/cliam-summary.component';
import { CliamCreateComponent } from './claim/cliam-create/cliam-create.component';
import { CopyContractComponent } from './pages/copy-contract/copy-contract.component';
import { RenewContractComponent } from './pages/renew-contract/renew-contract.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContractComponent } from './pages/update-contract/update-contract.component';
import { LayerComponent } from './pages/layers/layer/layer.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    LoginComponent,
    DashboardComponent,
    UserSetupComponent,
    ContractComponent,
    AddContractComponent,
    SearchContractComponent,
    SearchContractTabComponent,
    SearchContractLayerComponent,
    SearchContractOtherComponent,
    CreateContractComponent,
    LayerSummaryComponent,
    CreateLayerComponent,
    DatatableComponent,
    BasicTableComponent,
    Contrac2Component,
    CreateContract2Component,
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
    ParticipantsMasterComponent,
    AddParticipantComponent,
    ReinsurerComponent,
    ContactPreferenceComponent,
    ContactComponent,
    CliamSummaryComponent,
    CliamCreateComponent,
    CopyContractComponent,
    RenewContractComponent,
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
    AccordionModule,
    CalendarModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

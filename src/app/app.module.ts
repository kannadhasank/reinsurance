import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

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
import { MatSortModule } from '@angular/material/sort';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RightSidebarComponent } from './common/right-sidebar/right-sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContractComponent } from './pages/contract/contract.component';
import { CreateContractComponent } from './pages/create-contract/create-contract.component';
import { LayerDetailsComponent } from './pages/layers/layer-details/layer-details.component';
import { ReinsurerComponent } from './participants/reinsurer/reinsurer.component';
import { CopyContractComponent } from './pages/copy-contract/copy-contract.component';
import { UpdateContractComponent } from './pages/update-contract/update-contract.component';
import { LayerComponent } from './pages/layers/layer/layer.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { BrokerComponent } from './participants/broker/broker.component';
import { CedingConditionsComponent } from './pages/layers/ceding-conditions/ceding-conditions.component';
import { ParticipantsMasterComponent } from './pages/layers/participants-master/participants-master.component';
import { TermsComponent } from './pages/layers/terms/terms.component';
import { AttachementGuidelinesComponent } from './pages/layers/attachement-guidelines/attachement-guidelines.component';
import { NamedInsuredComponent } from './pages/layers/named-insured/named-insured.component';
import { ContractInfoComponent } from './pages/contract-info/contract-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    LoginComponent,
    DashboardComponent,
    ContractComponent,
    CreateContractComponent,
    LayerDetailsComponent,
    ReinsurerComponent,
    CopyContractComponent,
    LayerComponent,
    AllContractsComponent,
    BrokerComponent,
    UpdateContractComponent,
    CedingConditionsComponent,
    LayerComponent,
    ParticipantsMasterComponent,
    LayerDetailsComponent,
    TermsComponent,
    AttachementGuidelinesComponent,
    NamedInsuredComponent,
    ContractInfoComponent
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
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

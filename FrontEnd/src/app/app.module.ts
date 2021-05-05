import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OrganismComponent } from './organism/organism.component';
import { SequenceComponent } from './sequence/sequence.component';
import { ProteinClassificationComponent } from './protein-classification/protein-classification.component';
import { ProteinComponent } from './protein/protein.component';
import { GeneComponent } from './gene/gene.component';
import { AddSequenceComponent } from './add-sequence/add-sequence.component';
import { AddOrganismComponent } from './add-organism/add-organism.component';
import { AddGeneComponent } from './add-gene/add-gene.component';
import { AddProteinClassificationComponent } from './add-protein-classification/add-protein-classification.component';
import { AddProteinComponent } from './add-protein/add-protein.component';
import { EditGeneComponent } from './edit-gene/edit-gene.component';
import { EditOrganismComponent } from './edit-organism/edit-organism.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { EditProteinComponent } from './edit-protein/edit-protein.component';
import { EditSequenceComponent } from './edit-sequence/edit-sequence.component';
import { EditProteinClassificationComponent } from './edit-protein-classification/edit-protein-classification.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {RouterModule} from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    OrganismComponent,
    SequenceComponent,
    ProteinClassificationComponent,
    ProteinComponent,
    GeneComponent,
    AddSequenceComponent,
    AddOrganismComponent,
    AddGeneComponent,
    AddProteinClassificationComponent,
    AddProteinComponent,
    EditGeneComponent,
    EditOrganismComponent,
    EditProteinComponent,
    EditSequenceComponent,
    EditProteinClassificationComponent,
    AboutUsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
      NgxPaginationModule,
      Ng2OrderModule,
      Ng2SearchPipeModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'organisms/:taxID', component: OrganismComponent},
          { path: 'sequences/:seq_id', component: SequenceComponent},
          { path: 'protein_classifications/:prosite_ID', component: ProteinClassificationComponent},
          { path: 'proteins/:accession_number', component: ProteinComponent},
      ]),
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger',
      }),
      PaginationModule.forRoot(),
      BrowserAnimationsModule,
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {HomeComponent} from './home/home.component';
import {OrganismComponent} from './organism/organism.component';
import {SequenceComponent} from './sequence/sequence.component';
import {GeneComponent} from './gene/gene.component';
import {ProteinClassificationComponent} from './protein-classification/protein-classification.component';
import {ProteinComponent} from './protein/protein.component';
import {AddSequenceComponent} from './add-sequence/add-sequence.component';
import {AddOrganismComponent} from './add-organism/add-organism.component';
import {AddGeneComponent} from './add-gene/add-gene.component';
import {AddProteinClassificationComponent} from './add-protein-classification/add-protein-classification.component';
import {AddProteinComponent} from './add-protein/add-protein.component';
import {EditGeneComponent} from './edit-gene/edit-gene.component';
import {EditOrganismComponent} from './edit-organism/edit-organism.component';
import {EditProteinComponent} from './edit-protein/edit-protein.component';
import {EditProteinClassificationComponent} from './edit-protein-classification/edit-protein-classification.component';
import {EditSequenceComponent} from './edit-sequence/edit-sequence.component';
import {AboutUsComponent} from './about-us/about-us.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'proteins', component: ProteinComponent},
  {path: 'organisms', component: OrganismComponent},
  {path: 'genes', component: GeneComponent},
  {path: 'sequences', component: SequenceComponent},
  {path: 'protein-classifications', component: ProteinClassificationComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'add-sequence', component: AddSequenceComponent},
  {path: 'add-organism', component: AddOrganismComponent},
  {path: 'add-gene', component: AddGeneComponent},
  {path: 'add-protein-classification', component: AddProteinClassificationComponent},
  {path: 'add-protein', component: AddProteinComponent},
  {path: 'genes/edit/:gene_name', component: EditGeneComponent},
  {path: 'sequences/edit/:seq_id', component: EditSequenceComponent},
  {path: 'organisms/edit/:taxID', component: EditOrganismComponent},
  {path: 'proteins/edit/:accession_number', component: EditProteinComponent},
  {path: 'protein-classifications/edit/:prosite_ID', component: EditProteinClassificationComponent},
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

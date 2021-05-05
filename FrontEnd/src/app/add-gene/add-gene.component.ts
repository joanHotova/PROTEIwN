import {Component, OnInit} from '@angular/core';
import {GeneService} from '../service/gene.service';
import {Router} from '@angular/router';
import {Protein} from '../protein';
import {ProteinService} from '../service/protein.service';
import {Organism} from '../organism';
import {OrganismService} from '../service/organism.service';

@Component({
  selector: 'app-add-gene',
  templateUrl: './add-gene.component.html',
  styleUrls: ['./add-gene.component.css']
})
export class AddGeneComponent implements OnInit {
  proteins: Protein[];
  organisms: Organism[];

  private selection_org: any;
  private selection_prot: any;

  constructor(private geneService: GeneService,
              private router: Router,
              private proteinService: ProteinService,
              private organismService: OrganismService) { }

  ngOnInit() {
    this.proteinService.getAllProteins().subscribe((data: Protein[]) => {
      console.log(data);
      this.proteins = data;
      this.selection_prot = this.proteins[0].accession_number;
    });
    this.organismService.getAllOrganisms().subscribe((data: Organism[]) => {
      console.log(data);
      this.organisms = data;
      this.selection_org = this.organisms[0].taxID;
    });
  }
  createGene(form) {
    console.log(form.value.gene_name);
    console.log(form.value.selection_org);
    console.log(form.value.selection_prot);
    console.log(form.value.orf_name);
    console.log(form.value.synonym);
    const newFormData = {
      gene_name: form.value.gene_name,
      taxID: this.selection_org,
      accession_number: this.selection_prot,
      orf_name: form.value.orf_name,
      synonym: form.value.synonym
    };
    this.geneService.createGene(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/genes']);
    }, e => {
      console.log(e);
    });
  }

  selectChangeHandler_org(event: any) {
    this.selection_org = event.target.value;
    return this.selection_org;
  }

  selectChangeHandler_prot(event: any) {
    this.selection_prot = event.target.value;
    return this.selection_prot;
  }
}

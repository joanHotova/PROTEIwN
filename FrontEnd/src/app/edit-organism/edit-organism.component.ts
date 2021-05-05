import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganismService} from '../service/organism.service';
import {Protein} from '../protein';
import {ProteinService} from '../service/protein.service';
import {Organism} from '../organism';

@Component({
  selector: 'app-edit-organism',
  templateUrl: './edit-organism.component.html',
  styleUrls: ['./edit-organism.component.css']
})

export class EditOrganismComponent implements OnInit {

  proteins: Protein[];
  subProteins: Protein[];
  organism: Organism;
  private selection_prot: any;
  private unchecked: any;


  constructor(private organismService: OrganismService,
              private proteinService: ProteinService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subProteins = [];

    this.activatedRoute.paramMap.subscribe(params => {
      const taxId = params.get('taxID');
      this.organismService.getOrganism(taxId).subscribe(organism => {
        this.organism = organism;
        this.proteinService.getAllProteins().subscribe(proteins => {
          this.proteins = proteins;
          this.proteins.forEach(p => {
            if (this.organism.setProteins.filter((p2: Protein) => p.accession_number === p2.accession_number).length > 0) {
              p.isSelected = true;
            }
          });
        });
      });
    });


    this.selection_prot = new Array<string>();
    this.unchecked = new Array<string>();


  }

  updateOrganism(form) {
    for (let i = 0; i < this.proteins.length; i++) {
      if (this.proteins[i].isSelected) {
        this.selection_prot.push(this.proteins[i].accession_number);
      }
    }
    for (let i = 0; i < this.selection_prot.length; i++) {
      for (let j = 0; j < this.unchecked.length; j++) {
        if (this.selection_prot[i] === this.unchecked[j]) {
          const index = this.selection_prot.indexOf(this.unchecked[j]);
          this.selection_prot.splice(index, 1);
        }
      }
    }

    for (let i = 0; i < this.proteins.length; i++) {
      for (let j = 0; j < this.selection_prot.length; j++) {
        if (this.proteins[i].accession_number === this.selection_prot[j] ) {
          this.subProteins.push(this.proteins[i]);
        }
      }
    }

    const newFormData = {
      scientific_name: this.organism.scientific_name,
      mnemonic: this.organism.mnemonic,
      taxonomy_navigation: this.organism.taxonomy_navigation,
      setProteins: this.subProteins};

    this.organismService.updateOrganism(this.activatedRoute.snapshot.params.taxID, newFormData).subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/organisms']);
    this.router.onSameUrlNavigation = 'reload';
  }

  selectChangeHandler_prot(event: any, accession_number: string) {

    if (!event.target.checked) {
      this.unchecked.push(accession_number);
    }
    if (event.target.checked) {
      console.log(accession_number + ' checked');
      this.selection_prot.push(accession_number);
    } else {
      console.log(accession_number + ' unchecked');
      this.selection_prot = this.selection_prot.filter(m => m !== accession_number);
    }
    console.log(this.unchecked);
    return this.unchecked;

  }


}

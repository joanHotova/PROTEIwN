import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProteinService} from '../service/protein.service';
import {Sequence} from '../sequence';
import {ProteinClassification} from '../protein-classification';
import {Organism} from '../organism';
import {SequenceService} from '../service/sequence.service';
import {ProteinClassificationService} from '../service/protein-classification.service';
import {OrganismService} from '../service/organism.service';
import {Protein} from '../protein';

@Component({
  selector: 'app-edit-protein',
  templateUrl: './edit-protein.component.html',
  styleUrls: ['./edit-protein.component.css']
})
export class EditProteinComponent implements OnInit {


  sequences: Sequence[];
  proteinclassifications: ProteinClassification[];
  protein: Protein;
  organisms: Organism[];
  subOrganisms: Organism[];
  private unchecked: any;
  private selection_orgs: number[];
  private bool: boolean;

  constructor(private sequenceService: SequenceService,
              private proteinclassificationService: ProteinClassificationService,
              private proteinService: ProteinService,
              private organismService: OrganismService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subOrganisms = [];
    this.protein = new Protein();

    this.activatedRoute.paramMap.subscribe(params => {
      const accessionNumber = params.get('accession_number');
      this.proteinService.getProtein(accessionNumber).subscribe(protein => {
        this.protein = protein;
        this.organismService.getAllOrganisms().subscribe(organisms => {
          this.organisms = organisms;
          this.organisms.forEach(o => {
            if (this.protein.setOrganisms.filter((o2: Organism) => o.taxID == o2.taxID).length > 0) {
              o.isSelected = true;            }
          });
        });
      });
    });

    this.unchecked = new Array<number>();
    this.selection_orgs = new Array<number>();
  }

  updateProtein(form) {
    for (let i = 0; i < this.organisms.length; i++) {
      if (this.organisms[i].isSelected) {
        this.selection_orgs.push(this.organisms[i].taxID);
      }
    }

    for (let i = 0; i < this.selection_orgs.length; i++) {
      for (let j = 0; j < this.unchecked.length; j++) {
        if (this.selection_orgs[i] === this.unchecked[j]) {
          const index = this.selection_orgs.indexOf(this.unchecked[j]);
          this.selection_orgs.splice(index, 1);
        }
      }
    }

    for (let i = 0; i < this.organisms.length; i++) {
      for (let j = 0; j < this.selection_orgs.length; j++) {
        if (this.organisms[i].taxID === this.selection_orgs[j] ) {
          this.subOrganisms.push(this.organisms[i]);
        }
      }
    }

    const newFormData = {
      accession_number: this.protein.accession_number,
      seq_id: this.protein.seq_id,
      Prosite_ID: this.protein.Prosite_ID,
      prev_acc_numbers: this.protein.prev_acc_numbers,
      entry_name: this.protein.entry_name,
      full_name: this.protein.full_name,
      short_name: this.protein.short_name,
      reviewed: this.bool,
      integrated: this.protein.integrated,
      first_date: this.protein.first_date,
      last_date: this.protein.last_date,
      pfunction: this.protein.pfunction,
      proteomes: this.protein.proteomes,
      setOrganisms: this.subOrganisms};

    this.proteinService.updateProtein(this.activatedRoute.snapshot.params.accession_number,
        newFormData)
      .subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/proteins']);
    this.router.onSameUrlNavigation = 'reload';


  }

  selectChangeHandler_orgs(event: any, taxID: number) {

    if (!event.target.checked) {
      this.unchecked.push(taxID);
    }

    if (event.target.checked) {
      console.log(taxID + ' checked');
      this.selection_orgs.push(taxID);
    } else {
      console.log(taxID + ' unchecked');
      this.selection_orgs = this.selection_orgs.filter(m => m !== taxID);
    }
    console.log(this.selection_orgs);
    return this.selection_orgs;

  }


  reviewedFunction(event: any) {

    if (event.target.checked) {
      this.bool = true;
    } else {
      this.bool = false;
    }
    return this.bool;
  }

}

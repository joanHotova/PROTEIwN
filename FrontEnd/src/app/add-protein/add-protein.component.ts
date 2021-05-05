import { Component, OnInit } from '@angular/core';
import {ProteinService} from '../service/protein.service';
import {Router} from '@angular/router';
import {Organism} from '../organism';
import {ProteinClassification} from '../protein-classification';
import {Sequence} from '../sequence';
import {OrganismService} from '../service/organism.service';
import {SequenceService} from '../service/sequence.service';
import {ProteinClassificationService} from '../service/protein-classification.service';
import { ActivatedRoute } from '@angular/router';
import {Protein} from '../protein';


@Component({
  selector: 'app-add-protein',
  templateUrl: './add-protein.component.html',
  styleUrls: ['./add-protein.component.css']
})
export class AddProteinComponent implements OnInit {
  sequences: Sequence[];
  proteinclassifications: ProteinClassification[];
  organisms: Organism[];
  subOrganisms: Organism[];
  private selection_seq: any;
  private selection_pros: any;
  private selection_orgs: number[];

  constructor(private sequenceService: SequenceService,
              private proteinclassificationService: ProteinClassificationService,
              private proteinService: ProteinService,
              private organismService: OrganismService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subOrganisms = [];

    this.sequenceService.getAllSequences().subscribe((data: Sequence[]) => {
      console.log(data);
      this.sequences = data;
      this.selection_seq = this.sequences[0].seq_id;
    });

    this.proteinclassificationService.getAllProteinClassifications().subscribe((data: ProteinClassification[]) => {
      console.log(data);
      this.proteinclassifications = data;
      this.selection_pros = this.proteinclassifications[0].prosite_ID;
    });

    this.organismService.getAllOrganisms().subscribe((data: Organism[]) => {
      console.log(data);
      this.organisms = data;
    });

    this.selection_orgs = new Array<number>();

  }

  createProtein(form) {
    console.log(form.value.accession_number);
    console.log(form.value.seq_id);
    console.log(form.value.Prosite_ID);
    console.log(form.value.prev_acc_numbers);
    console.log(form.value.entry_name);
    console.log(form.value.full_name);
    console.log(form.value.short_name);
    console.log(form.value.reviewed);
    console.log(form.value.integrated);
    console.log(form.value.first_date);
    console.log(form.value.last_date);
    console.log(form.value.pfunction);
    console.log(form.value.proteomes);
    console.log(form.value.setOrganisms);

    for (let i = 0; i < this.organisms.length; i++) {
      for (let j = 0; j < this.selection_orgs.length; j++) {
        if (this.organisms[i].taxID === this.selection_orgs[j] ) {
          this.subOrganisms.push(this.organisms[i]);
        }
      }
    }


    const newFormData = {accession_number: form.value.accession_number, seq_id: this.selection_seq, Prosite_ID: this.selection_pros,
      prev_acc_numbers: form.value.prev_acc_numbers, entry_name: form.value.entry_name, full_name: form.value.full_name,
      short_name: form.value.short_name, reviewed: form.value.reviewed, integrated: form.value.integrated,
      first_date: form.value.first_date, last_date: form.value.last_date, pfunction: form.value.pfunction,
      proteomes: form.value.proteomes, setOrganisms: this.subOrganisms};

    console.log(newFormData);

    this.proteinService.createProtein(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/proteins']);
    }, e => {
      console.log(e);
    });
  }


  selectChangeHandler_seq(event: any) {
    this.selection_seq = event.target.value;
    return this.selection_seq;
  }

  selectChangeHandler_pros(event: any) {
    this.selection_pros = event.target.value;
    return this.selection_pros;

  }

  selectChangeHandler_orgs(event: any, taxID: number) {
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


}

import { Component, OnInit } from '@angular/core';
import {OrganismService} from '../service/organism.service';
import {Router} from '@angular/router';
import {Protein} from '../protein';
import {ProteinService} from '../service/protein.service';

@Component({
  selector: 'app-add-organism',
  templateUrl: './add-organism.component.html',
  styleUrls: ['./add-organism.component.css']
})
export class AddOrganismComponent implements OnInit {

  proteins: Protein[];
  subProteins: Protein[];
  // tslint:disable-next-line:variable-name
  private selection_prot: any;

  constructor(private organismService: OrganismService,
              private proteinService: ProteinService,
              private router: Router) {}

  ngOnInit() {
    this.subProteins = [];

    this.proteinService.getAllProteins().subscribe((data: Protein[]) => {
      console.log(data);
      this.proteins = data;
    });
    this.selection_prot = new Array<string>();
  }

  createOrganism(form) {
    console.log(form.value.taxID);
    console.log(form.value.scientific_name);
    console.log(form.value.mnemonic);
    console.log(form.value.taxonomy_navigation);
    console.log(form.value.setOrganisms);
    console.log(form.setProteins);

    for (let i = 0; i < this.proteins.length; i++) {
      for (let j = 0; j < this.selection_prot.length; j++) {
        if (this.proteins[i].accession_number === this.selection_prot[j] ) {
          this.subProteins.push(this.proteins[i]);
        }
      }
    }

    const newFormData = {taxID: form.value.taxID, scientific_name: form.value.scientific_name, mnemonic: form.value.mnemonic,
      taxonomy_navigation: form.value.taxonomy_navigation, setProteins: this.subProteins};

    this.organismService.createOrganism(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/organisms']);
    });
  }


  // tslint:disable-next-line:variable-name
  selectChangeHandler_prot(event: any, accession_number: string) {
    if (event.target.checked) {
      console.log(accession_number + ' checked');
      this.selection_prot.push(accession_number);
    } else {
      console.log(accession_number + ' unchecked');
      this.selection_prot = this.selection_prot.filter(m => m !== accession_number);
    }
    console.log(this.selection_prot);
    return this.selection_prot;

  }


}

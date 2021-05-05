import {Component, OnInit} from '@angular/core';
import {GeneService} from '../service/gene.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-gene',
  templateUrl: './edit-gene.component.html',
  styleUrls: ['./edit-gene.component.css']
})
export class EditGeneComponent implements OnInit {
  editForm = new FormGroup({
    gene_name: new FormControl(''),
    taxID: new FormControl(''),
    accession_number: new FormControl(''),
    orf_name: new FormControl(''),
    synonym: new FormControl('')
  });

  constructor(private geneService: GeneService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.gene_name);
    this.geneService.getGene(this.activatedRoute.snapshot.params.gene_name).subscribe((result) => {
      this.editForm = new FormGroup({
        gene_name: new FormControl(result['gene_name']),
        taxID: new FormControl(result['taxID']),
        accession_number: new FormControl(result['accession_number']),
        orf_name: new FormControl(result['orf_name']),
        synonym: new FormControl(result['synonym'])
      });
    });
  }

  updateGene() {
    this.geneService.updateGene(this.activatedRoute.snapshot.params.gene_name, this.editForm.value).subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/genes']);
  }
}

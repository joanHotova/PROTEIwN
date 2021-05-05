import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProteinClassificationService} from '../service/protein-classification.service';

@Component({
  selector: 'app-edit-protein-classification',
  templateUrl: './edit-protein-classification.component.html',
  styleUrls: ['./edit-protein-classification.component.css']
})
export class EditProteinClassificationComponent implements OnInit {
  editForm = new FormGroup({
    prosite_ID: new FormControl(''),
    family: new FormControl(''),
    subfamily: new FormControl('')
  });
  constructor(private proteinClassificationService: ProteinClassificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.prosite_ID);
    this.proteinClassificationService.getProteinClassification(this.activatedRoute.snapshot.params.prosite_ID).subscribe((result) => {
      this.editForm = new FormGroup({
        prosite_ID: new FormControl(result['prosite_ID']),
        family: new FormControl(result['family']),
        subfamily: new FormControl(result['subfamily'])
      });
    });
  }
  updateProteinClassification() {
    this.proteinClassificationService.updateProteinClassification(
      this.activatedRoute.snapshot.params.prosite_ID, this.editForm.value).subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/protein-classifications']);
  }
}

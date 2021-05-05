import { Component, OnInit } from '@angular/core';
import {ProteinClassificationService} from '../service/protein-classification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-protein-classification',
  templateUrl: './add-protein-classification.component.html',
  styleUrls: ['./add-protein-classification.component.css']
})
export class AddProteinClassificationComponent implements OnInit {

  constructor(private proteinclassificationService: ProteinClassificationService,
              private router: Router) { }

  ngOnInit() {
  }
  createProteinClassification(form) {
    console.log(form.value.prosite_ID);
    console.log(form.value.family);
    console.log(form.value.subfamily);
    const newFormData = {prosite_ID: form.value.prosite_ID, family: form.value.family, subfamily: form.value.subfamily};
    this.proteinclassificationService.createProteinClassification(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/protein-classifications']);
    });
  }

}

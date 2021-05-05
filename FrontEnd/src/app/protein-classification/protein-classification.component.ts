import { Component, OnInit } from '@angular/core';
import {ProteinClassificationService} from '../service/protein-classification.service';
import {ProteinClassification} from '../protein-classification';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-protein-classification',
  templateUrl: './protein-classification.component.html',
  styleUrls: ['./protein-classification.component.css']
})
export class ProteinClassificationComponent implements OnInit {
  proteinclassifications: ProteinClassification[];
  p: number = 1;
  prosite_ID;
  public popoverTitle: string = 'Warning';
  public popoverMessage: string = 'Are you sure you want to delete this protein classification?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(private  proteinclassificationService: ProteinClassificationService,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private route: ActivatedRoute) { }
  searchText;
  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    const routeParams = this.route.snapshot.paramMap;
    const prositeIDFromRoute = routeParams.get('prosite_ID');

    this.proteinclassificationService.getAllProteinClassifications().subscribe((data: ProteinClassification[]) => {
      console.log(data);
      console.log(`Prosite ID: ${prositeIDFromRoute}`);
      if (prositeIDFromRoute != null) {
        this.proteinclassifications = data.filter((proteinclassification: ProteinClassification) =>
          proteinclassification.prosite_ID === prositeIDFromRoute);
      } else {
        this.proteinclassifications = data;
      }
    });

  }
  deleteProteinClassification(prosite_ID) {
    this.proteinclassificationService.deleteProteinClassification(prosite_ID).subscribe(data => {
      console.log(data);
      location.reload();
    });
  }

}

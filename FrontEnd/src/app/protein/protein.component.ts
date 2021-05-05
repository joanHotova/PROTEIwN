import { Component, OnInit } from '@angular/core';
import {Protein} from '../protein';
import {ProteinService} from '../service/protein.service';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent implements OnInit {

  proteins: Protein[];
  p: number = 1;
  accession_number;
  public popoverTitle: string = 'Warning';
  public popoverMessage: string = 'Are you sure you want to delete this protein?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(private proteinService: ProteinService,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private route: ActivatedRoute) { }
  searchText;
  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    const routeParams = this.route.snapshot.paramMap;
    const proteinIDFromRoute = routeParams.get('accession_number');
    this.proteinService.getAllProteins().subscribe((data: Protein[]) => {
      console.log(data);
      console.log(`Protein ID: ${proteinIDFromRoute}`);
      if (proteinIDFromRoute != null) {
        this.proteins = data.filter((protein: Protein) =>
          protein.accession_number === proteinIDFromRoute);
      } else {
        this.proteins = data;
      }
    });
  }
  deleteProtein(accession_number) {
    this.proteinService.deleteProtein(accession_number).subscribe(data => {
      console.log(data);
      location.reload();
    });
  }
}

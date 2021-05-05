import { Component, OnInit } from '@angular/core';
import {OrganismService} from '../service/organism.service';
import {Organism} from '../organism';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-organism',
  templateUrl: './organism.component.html',
  styleUrls: ['./organism.component.css']
})
export class OrganismComponent implements OnInit {

  organisms: Organism[];
  p: number = 1;
  taxID;
  public popoverTitle: string = 'Warning';
  public popoverMessage: string = 'Are you sure you want to delete this organism?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(private organismService: OrganismService,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private route: ActivatedRoute) {
  }
  searchText;
  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    const routeParams = this.route.snapshot.paramMap;
    const taxIDFromRoute = Number(routeParams.get('taxID'));

    this.organismService.getAllOrganisms().subscribe((data: Organism[]) => {
      console.log(data);
      console.log(`Taxonomy ID: ${taxIDFromRoute}`);
      if (taxIDFromRoute !== 0) {
        this.organisms = data.filter((organism: Organism) => organism.taxID === taxIDFromRoute);
      } else {
        this.organisms = data;
      }

    });
  }
  deleteOrganism(taxID) {
    this.organismService.deleteOrganism(taxID).subscribe(data => {
      console.log(data);
      location.reload();
    });
  }
}

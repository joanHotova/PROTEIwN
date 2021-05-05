import {Component, OnInit} from '@angular/core';
import {GeneService} from '../service/gene.service';
import {Gene} from '../gene';
import {ActivatedRoute, Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {
  genes: Gene[];
  p: number = 1;
  gene_name;
  public popoverTitle: string = 'Warning';
  public popoverMessage: string = 'Are you sure you want to delete this gene?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private geneService: GeneService,
              private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private route: ActivatedRoute) {
  }
  searchText;
  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    const routeParams = this.route.snapshot.paramMap;
    const geneNameFromRoute = routeParams.get('gene_name');

    this.geneService.getAllGenes().subscribe((data: Gene[]) => {
      console.log(data);
      console.log(`Gene name: ${geneNameFromRoute}`);
      if (geneNameFromRoute != null) {
        this.genes = data.filter((gene: Gene) =>
          gene.gene_name === geneNameFromRoute);
      } else {
        this.genes = data;
      }
    });
  }
  deleteGene(gene_name) {
      this.geneService.deleteGene(gene_name).subscribe(data => {
        console.log(data);
        location.reload();
      });
  }
}

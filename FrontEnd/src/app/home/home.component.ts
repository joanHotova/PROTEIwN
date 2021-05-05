import {Component, OnInit} from '@angular/core';
import {Sequence} from '../sequence';
import {Gene} from '../gene';
import {Organism} from '../organism';
import {Protein} from '../protein';
import {ProteinClassification} from '../protein-classification';
import {SequenceService} from '../service/sequence.service';
import {ProteinService} from '../service/protein.service';
import {GeneService} from '../service/gene.service';
import {OrganismService} from '../service/organism.service';
import {ProteinClassificationService} from '../service/protein-classification.service';
import {AllBioData} from '../AllBioData';
import {OrSegments} from '../OrSegments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  genesCache: Gene[];
  genesFiltered: Gene[];

  organismsCache: Organism[];
  organismsFiltered: Organism[];

  proteinsCache: Protein[];
  proteinsFiltered: Protein[];

  proteinClassificationCache: ProteinClassification[];
  proteinClassificationFiltered: ProteinClassification[];

  sequencesCache: Sequence[];
  sequencesFiltered: Sequence[];

  searchTextFromHome: string;
  q_splitted: string[];

  keywords: string[];
  Qfinal: Gene[];
  index: number[];
  i: number;

  constructor(private sequenceService: SequenceService,
              private proteinService: ProteinService,
              private geneService: GeneService,
              private organismService: OrganismService,
              private proteinClassificationService: ProteinClassificationService) { }

  ngOnInit(): void {
    this.geneService.getAllGenes().subscribe((data: Gene[]) => {
      console.log(data);
      this.genesCache = data;
    });

    this.organismService.getAllOrganisms().subscribe((data: Organism[]) => {
      console.log(data);
      this.organismsCache = data;
    });

    this.proteinClassificationService.getAllProteinClassifications().subscribe((data: ProteinClassification[]) => {
      console.log(data);
      this.proteinClassificationCache = data;
    });

    this.proteinService.getAllProteins().subscribe((data: Protein[]) => {
      console.log(data);
      this.proteinsCache = data;
    });

    this.sequenceService.getAllSequences().subscribe((data: Sequence[]) => {
      console.log(data);
      this.sequencesCache = data;
    });
  }

  onSearchTextChange(searchQuery: string): void {
    console.log(searchQuery);
    if (searchQuery == null || searchQuery.length === 0) {
      this.genesFiltered = null;
      this.organismsFiltered = null;
      this.proteinsFiltered = null;
      this.proteinClassificationFiltered = null;
      this.sequencesFiltered = null;
    } else {
      const allBioData = new AllBioData();
      allBioData.proteinList = this.proteinsCache;
      allBioData.organismList = this.organismsCache;
      allBioData.geneList = this.genesCache;
      allBioData.sequenceList = this.sequencesCache;
      allBioData.proteinClassificationList = this.proteinClassificationCache;

      const orSegments = new OrSegments(searchQuery, allBioData);
      const filteredAllBioData = orSegments.orFunction();

      this.proteinsFiltered = filteredAllBioData.proteinList;
      this.organismsFiltered = filteredAllBioData.organismList;
      this.genesFiltered = filteredAllBioData.geneList;
      this.sequencesFiltered = filteredAllBioData.sequenceList;
      this.proteinClassificationFiltered = filteredAllBioData.proteinClassificationList;
    }
  }
}


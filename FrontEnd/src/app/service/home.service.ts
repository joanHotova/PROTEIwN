import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organism} from '../organism';
import {Gene} from '../gene';
import {Sequence} from '../sequence';
import {Protein} from '../protein';
import {ProteinClassification} from '../protein-classification';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private organismUrl = 'http://localhost:8080/organisms/all_organisms';
  private geneUrl = 'http://localhost:8080/genes/all_genes';
  private proteinUrl = 'http://localhost:8080/proteins/all_proteins';
  private protein_classificationUrl = 'http://localhost:8080/protein_classifications/all_protein_classifications';
  private sequenceUrl = 'http://localhost:8080/sequences/all_sequences';

  constructor(private http: HttpClient) { }

  getProteins(): Observable<Protein[]> {
    return this.http.get<Protein[]>(`${this.proteinUrl}`);
  }

  getOrganisms(): Observable<Organism[]> {
    return this.http.get<Organism[]>(`${this.organismUrl}`);
  }
  getGenes(): Observable<Gene[]> {
    return this.http.get<Gene[]>(`${this.geneUrl}`);
  }
  getProteinClassifications(): Observable<ProteinClassification[]> {
    return this.http.get<ProteinClassification[]>(`${this.protein_classificationUrl}`);
  }
  getSequences(): Observable<Sequence[]> {
    return this.http.get<Sequence[]>(`${this.sequenceUrl}`);
  }
}

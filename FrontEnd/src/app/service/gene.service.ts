import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gene} from '../gene';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  private baseUrl = 'http://localhost:8080/genes/';

  constructor(private http: HttpClient) {
  }

  getAllGenes(): Observable<Gene[]> {
    return this.http.get<Gene[]>(`${this.baseUrl}/all_genes`);
  }
  getGene(gene_name) {
    return this.http.get(`${this.baseUrl}/${gene_name}`);
  }
  createGene(gene) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.baseUrl}`, gene, {headers: httpHeaders});
  }
  updateGene(gene_name, gene) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(`${this.baseUrl}/${gene_name}`, gene);
  }
  deleteGene(gene_name: string) {
    return this.http.delete<Gene>(`${this.baseUrl}/${gene_name}`);
  }
}


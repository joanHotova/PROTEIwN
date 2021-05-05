import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Protein} from '../protein';
import {Organism} from '../organism';

@Injectable({
  providedIn: 'root'
})
export class ProteinService {

  private baseUrl = 'http://localhost:8080/proteins/';

  constructor(private http: HttpClient) {
  }

  getAllProteins(): Observable<Protein[]> {
    return this.http.get<Protein[]>(`${this.baseUrl}/all_proteins`);
  }
  // tslint:disable-next-line:variable-name
  getProtein(accession_number): Observable<Protein>  {
    return this.http.get<Protein>(`${this.baseUrl}/${accession_number}`);
  }

  createProtein(protein) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.baseUrl}`, protein, {headers: httpHeaders});
  }
  // tslint:disable-next-line:variable-name
  updateProtein(accession_number, protein) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(`${this.baseUrl}/${accession_number}`, protein);
  }
  // tslint:disable-next-line:variable-name
  deleteProtein(accession_number: string) {
    return this.http.delete<Protein>(`${this.baseUrl}/${accession_number}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organism} from '../organism';

@Injectable({
  providedIn: 'root'
})
export class OrganismService {

  private baseUrl = 'http://localhost:8080/organisms/';

  constructor(private http: HttpClient) {
  }

  getAllOrganisms(): Observable<Organism[]> {
    return this.http.get<Organism[]>(`${this.baseUrl}/all_organisms`);
  }
  getOrganism(taxID): Observable<Organism> {
    return this.http.get<Organism>(`${this.baseUrl}/${taxID}`);
  }
  createOrganism(organism) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.baseUrl}`, organism, {headers: httpHeaders});
  }
  updateOrganism(taxID, organism) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(`${this.baseUrl}/${taxID}`, organism);
  }
  deleteOrganism(taxID: number) {
    return this.http.delete<Organism>(`${this.baseUrl}/${taxID}`);
  }
}

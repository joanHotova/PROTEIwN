import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProteinClassification} from '../protein-classification';

@Injectable({
  providedIn: 'root'
})
export class ProteinClassificationService {

  private baseUrl = 'http://localhost:8080/protein_classifications/';

  constructor(private http: HttpClient) {
  }

  getAllProteinClassifications(): Observable<ProteinClassification[]> {
    return this.http.get<ProteinClassification[]>(`${this.baseUrl}/all_protein_classifications`);
  }
  getProteinClassification(prosite_ID) {
  return this.http.get(`${this.baseUrl}/${prosite_ID}`);
}
  createProteinClassification(proteinclassification) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.baseUrl}`, proteinclassification, {headers: httpHeaders});
  }
  updateProteinClassification(prosite_ID, proteinclassification) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(`${this.baseUrl}/${prosite_ID}`, proteinclassification);
  }
  deleteProteinClassification(prosite_ID: string) {
    return this.http.delete<ProteinClassification>(`${this.baseUrl}/${prosite_ID}`);
  }
}

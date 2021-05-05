import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sequence} from '../sequence';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  private baseUrl = 'http://localhost:8080/sequences/';

  constructor(private http: HttpClient) {
  }

  getAllSequences(): Observable<Sequence[]> {
    return this.http.get<Sequence[]>(`${this.baseUrl}/all_sequences`);
  }
  getSequence(seq_id) {
    return this.http.get(`${this.baseUrl}/${seq_id}`);
  }
  createSequence(sequence) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.baseUrl}`, sequence, {headers: httpHeaders});
  }
  updateSequence(seq_id, sequence) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(`${this.baseUrl}/${seq_id}`, sequence);
  }
  deleteSequence(seq_id: string) {
    return this.http.delete<Sequence>(`${this.baseUrl}/${seq_id}`);
  }
}

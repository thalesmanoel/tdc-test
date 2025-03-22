import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposta } from '../models/proposta';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor() { }

  http = inject(HttpClient);

  API = "http://localhost:8080/proposal";

  listAll(): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(this.API+"/listAll");
  }

  save(proposal: Proposta): Observable<Proposta[]> {
    return this.http.post<Proposta[]>(this.API+"/save", Proposta);
  }
}

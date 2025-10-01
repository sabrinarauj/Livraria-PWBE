import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livros';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LivrosServices {
  private http = inject(HttpClient)
  private base = environment.apiBase

  listar(): Observable<Livro[]>{
    const url = `${this.base}api/livros`
    return this.http.get<[]>(url)
  }
}
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Autor } from '../models/autor'
import { Livro } from '../models/livros'

@Injectable({
    providedIn: 'root'
})
export class FiltrosServices { 
    private apiUrl = 'http://127.0.0.1:8000/api/livros'
    
    constructor(private http: HttpClient) { }

    filtrarLivro(query: string): Observable<any> {
        const params = new HttpParams().set('pesquisar', query);
        return this.http.get(this.apiUrl, { params })
    }
}
import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { FiltrosServices } from '../../services/filtros.services';

@Component({
    selector: 'app-pesquisa.component',
    imports: [RouterLink],
    templateUrl: './filtro.component.html',
    styleUrl: './filtro.component.css'
})

export class FiltroComponent {
    livros: any[] = [];
    livroTermo: string = '';

    constructor(private filtroService: FiltrosServices) {}

    onPesquisa(): void {
        if (this.livroTermo.trim()) {
            this.filtroService.filtrarLivro(this.livroTermo).subscribe(
                (dados) => {
                    this.livros = dados.results
                },
                (erro) => {
                    console.error('Erro ao buscar livro', erro)
                }
            );
        } else {
            this.livros = [];
        }
    }
}
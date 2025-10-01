import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivrosServices } from '../../services/livros.services';
import { Livro } from '../../models/livros';
import { AuthService } from '../../services/auth.services';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section style="max-width:900px;margin:2rem auto;padding:0 1rem">
      <h1>Livros</h1>

      @if (carregando()) {
        <p>Carregando…</p>
      } @else if (erro()) {
        <p style="color:#c62828">{{ erro() }}</p>
      } @else {
        <ul style="padding-left:1.25rem">
          @for (l of livros(); track l.id) {
            <li style="margin:.25rem 0">
              <strong>{{ l.titulo }} {{ l.subtitulo }}</strong>
              @if (l.autor) { — <em style="color:#666">{{ l.editora }}</em> }
              @if (l.isbn) { • {{ l.descricao }} }
              @if (l.idioma) { <div style="color:#555">{{ l.idioma }}</div> }
              @if (l.ano) { • {{ l.ano }} }
              @if (l.preco) { • {{ l.preco }} }
              @if (l.disponivel) { • {{ l.disponivel }} }
              @if (l.estoque) { • {{ l.estoque }} }
              @if (l.desconto) { • {{ l.desconto }} }
              @if (l.dimensoes) { • {{ l.dimensoes }} }
              @if (l.peso) { • {{ l.peso }} }
            </li>
          }
        </ul>
      }

      <nav style="margin-top:1rem">
        <a routerLink="/">Voltar ao início</a>
      </nav>
    </section>
  `
})
export class LivrosComponent {
  private svc = inject(LivrosServices);
  private auth = inject(AuthService); 
  livros = signal<Livro[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  constructor() {
    console.log("Token de acesso: ", this.auth.token());
    
    this.svc.listar().subscribe({
      next: (data) => { this.livros.set(data); this.carregando.set(false); },
      error: () => { this.erro.set('Falha ao carregar os livros'); this.carregando.set(false); }
    });
  }
}

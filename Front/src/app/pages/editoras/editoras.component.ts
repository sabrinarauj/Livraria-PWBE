import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EditorasServices } from '../../services/editoras.services';
import { Editora } from '../../models/editoras';
import { AuthService } from '../../services/auth.services';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section style="max-width:900px;margin:2rem auto;padding:0 1rem">
      <h1>Editoras</h1>

      @if (carregando()) {
        <p>Carregando…</p>
      } @else if (erro()) {
        <p style="color:#c62828">{{ erro() }}</p>
      } @else {
        <ul style="padding-left:1.25rem">
          @for (e of editoras(); track e.editora) {
            <li style="margin:.25rem 0">
              <strong>{{ e.editora }} {{ e.cnpj }}</strong>
              @if (e.endereco) { — <em style="color:#666">{{ e.endereco }}</em> }
              @if (e.telefone) { • {{ e.telefone }} }
              @if (e.email) { <div style="color:#555">{{ e.email }}</div> }
              @if (e.site) { • {{ e.site }} }
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
export class EditorasComponent {
  private svc = inject(EditorasServices);
  private auth = inject(AuthService); 
  editoras = signal<Editora[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  constructor() {
    console.log("Token de acesso: ", this.auth.token());
    
    this.svc.listar().subscribe({
      next: (data) => { this.editoras.set(data); this.carregando.set(false); },
      error: () => { this.erro.set('Falha ao carregar as editoras'); this.carregando.set(false); }
    });
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component/home.component';
import { AutoresComponent } from './pages/authors/authors.component';
import { EditorasComponent } from './pages/editoras/editoras.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autores', component: AutoresComponent},
    {path: 'editoras', component: EditorasComponent},
    {path: 'livros', component: LivrosComponent},
];

// rotas das páginas 

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component/home.component';
import { AutoresComponent } from './pages/authors/authors.component';
import { EditorasComponent } from './pages/editoras/editoras.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'autores', component: AutoresComponent, canActivate: [authGuard] },
    { path: 'editoras', component: EditorasComponent, canActivate: [authGuard] },
    { path: 'livros', component: LivrosComponent, canActivate: [authGuard] },
];

// rotas das páginas 

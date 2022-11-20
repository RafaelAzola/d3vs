import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioTutorComponent } from './components/inicio-tutor/inicio-tutor.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroTutorComponent } from './components/cadastro-tutor/cadastro-tutor.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'inicio-tutor', component: InicioTutorComponent},
  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'cadastro-tutor', component: CadastroTutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

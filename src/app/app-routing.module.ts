import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroTutorComponent } from './components/cadastro-tutor/cadastro-tutor.component';
import { InicioAlunoComponent } from './components/inicio-aluno/inicio-aluno.component';
import { InicioTutorComponent } from './components/inicio-tutor/inicio-tutor.component';
import { PerfilTutorComponent } from './components/perfil-tutor/perfil-tutor.component';
import { PerfilTutorAlunoComponent } from './components/perfil-tutor-aluno/perfil-tutor-aluno.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { HistoricoAlunoComponent } from './components/historico-aluno/historico-aluno.component';
import { HistoricoTutorComponent } from './components/historico-tutor/historico-tutor.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'cadastro-tutor', component: CadastroTutorComponent},
  {path: 'inicio-aluno', component: InicioAlunoComponent},
  {path: 'inicio-tutor', component: InicioTutorComponent},
  {path: 'perfil-tutor', component: PerfilTutorComponent},
  {path: 'perfil-tutor-aluno', component: PerfilTutorAlunoComponent},
  {path: 'solicitacoes', component: SolicitacoesComponent},
  {path: 'historico-aluno', component: HistoricoAlunoComponent},
  {path: 'historico-tutor', component: HistoricoTutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

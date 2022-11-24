import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioTutorComponent } from './components/inicio-tutor/inicio-tutor.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroTutorComponent } from './components/cadastro-tutor/cadastro-tutor.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { InicioAlunoComponent } from './components/inicio-aluno/inicio-aluno.component';
import { RetornarComponent } from './components/retornar/retornar.component';
import { MenuFiltroComponent } from './components/menu-filtro/menu-filtro.component';
import { HistoricoTutorComponent } from './components/historico-tutor/historico-tutor.component';
import { HistoricoAlunoComponent } from './components/historico-aluno/historico-aluno.component';
import { PerfilTutorComponent } from './components/perfil-tutor/perfil-tutor.component';
import { PerfilTutorAlunoComponent } from './components/perfil-tutor-aluno/perfil-tutor-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InicioTutorComponent,
    CadastroAlunoComponent,
    CadastroTutorComponent,
    SolicitacoesComponent,
    InicioAlunoComponent,
    RetornarComponent,
    MenuFiltroComponent,
    HistoricoTutorComponent,
    HistoricoAlunoComponent,
    PerfilTutorComponent,
    PerfilTutorAlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

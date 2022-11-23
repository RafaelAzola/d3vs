import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Interquali } from 'src/app/models/interquali.model';
import { interqualiServiceService } from 'src/app/services/interquali-service/interquali-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  form!: FormGroup;
  interesse: Interquali[] = [];
  interquali!: Interquali[];

  constructor(
    private formBuilder: FormBuilder,
    private criarUsuario: UserServiceService,
    private criarInterquali: interqualiServiceService,
    private router: Router,
  ){}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: new FormControl(''),
      senha: new FormControl(''),
      interesse: new FormControl(''),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      nascimento: new FormControl(''),
      descricao: new FormControl('')
    })

    this.criarInterquali.lerInterquali().subscribe({
      next:(usuario: Interquali[]) => {
        this.interquali = usuario
      }
    })
  }

  converterInterQuali2String(interquali: Interquali[]) {
    let str: string[] = []
    interquali.forEach(e => str.push(e.nome));
    return str;
  }

  selecionarInteresse(){

    const interesse = this.form.controls["interesse"].value;
    const interesses: Interquali = {nome: interesse}
    this.interesse.push(interesses)
  }

  cadastrarUsuario(){

    const email = this.form.controls["email"].value;
    const senha = this.form.controls["senha"].value;
    const nome = this.form.controls["nome"].value;
    const cpf = this.form.controls["cpf"].value;
    const nascimento = this.form.controls["nascimento"].value;
    const descricao = this.form.controls["descricao"].value;

    const usuario: User = {discriminacao: "aluno", email: email, senha: senha,
    interquali: this.converterInterQuali2String(this.interesse), nome: nome, cpf: cpf, nascimento: nascimento, descricao: descricao}

    this.criarUsuario.salvarUser(usuario).subscribe({
      next: () => {
        this.router.navigateByUrl('/inicio-aluno')
      }
    })
  }
}

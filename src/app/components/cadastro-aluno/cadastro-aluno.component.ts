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
  user!: User[];
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
      nome: new FormControl(''),
      cpf: new FormControl(''),
      nascimento: new FormControl(''),
      descricao: new FormControl('')
    })

    this.criarUsuario.lerUser().subscribe({
      next:(usuario: User[]) => {
        this.user = usuario
      }
    })

    this.criarInterquali.lerInterquali().subscribe({
      next:(usuario: Interquali[]) => {
        this.interquali = usuario
      }
    })

  }

  cadastrarUsuario(){

    const id = (this.user[(this.user.length)-1].id) +1;
    const email = this.form.controls["email"].value;
    const senha = this.form.controls["senha"].value;
    const nome = this.form.controls["nome"].value;
    const cpf = this.form.controls["cpf"].value;
    const nascimento = this.form.controls["nascimento"].value;
    const descricao = this.form.controls["descricao"].value;

    const usuario: User = {id: id, discriminacao: 1, email: email, senha: senha, nome: nome, cpf: cpf, nascimento: nascimento, descricao: descricao}

    this.criarUsuario.salvarUser(usuario).subscribe({
      next: () => {
        this.router.navigateByUrl('/inicio-aluno')
      }
    })
  }
}

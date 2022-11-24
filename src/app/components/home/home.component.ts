import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth.model';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private lerUsuario: UserServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      checktutor: new FormControl('')
    })
  }

  realizarLogin(){

    const email = this.form.controls["email"].value;
    const senha = this.form.controls["senha"].value;
    const discriminacao = this.form.controls["checktutor"].value;

    const usuario: Auth = {discriminacao: discriminacao ? "prof" : "aluno", email: email, senha: senha}

    this.lerUsuario.authUser(usuario).subscribe({
      next: (user) => {
        if(user.discriminacao == "aluno"){
          this.router.navigate(['../inicio-aluno'])
        }
        if(user.discriminacao == "prof"){
          this.router.navigate(['../inicio-tutor'])
        }
      },
      error: () => {
        this.alertaDados("falha")
      }
    })
  }

  alertaDados(tipoExecucao: string){
    switch (tipoExecucao) {
      case "falha":
        this.snackBar.open("Não foi possível realizar o login", undefined, {duration: 2000})
        break;
    }
  }
}

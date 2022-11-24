import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  usuarios!: User[];

  constructor(
    private formBuilder: FormBuilder,
    private lerUsuario: UserServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })

    this.lerUsuario.lerUser().subscribe({
      next:(clientes: User[]) => {
        this.usuarios = clientes
      }
    })
  }

  realizarLogin(){
    let cliente = this.validarUsuario()

    if(!cliente){
      this.alertaDados("falha")
    } else {
      this.validarSenha(cliente)
    }
  }

  alertaDados(tipoExecucao: string){
    switch (tipoExecucao) {
      case "falha":
        this.snackBar.open("Não foi possível realizar o login", undefined, {duration: 2000})
        break;
    }
  }

  validarUsuario(): any{
    for(let cliente of this.usuarios){
      if(cliente.email === this.form.controls["email"].value)
      return cliente;
    }
    return null;
  }

  validarSenha(cliente: User){
    if(cliente.senha === this.form.controls["senha"].value){
      if(cliente.discriminacao == "aluno"){
        this.router.navigate(['../inicio-aluno'])
      }
      if(cliente.discriminacao == "prof"){
        this.router.navigate(['../inicio-tutor'])
      }
    } else {
      this.alertaDados("falha")
    }
  }
}

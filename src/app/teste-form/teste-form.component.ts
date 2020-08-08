import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = ''; // para o campo ter um valor padrão
}

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.css']
})
export class TesteFormComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outras'];

  salvar(form: NgForm) {
    //this.cliente.nome = form.value.primeiroNome;
    //this.cliente.email = form.value.emailAdress;
    //this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    console.log(form.valid);
    console.log(this.cliente);

    form.reset({ profissaoForm: '' });
  }

}

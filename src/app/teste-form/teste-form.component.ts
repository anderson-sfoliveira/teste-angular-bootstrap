import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.css']
})
export class TesteFormComponent {

  profissoes = ['Programador', 'Empresário', 'Outras'];

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
    console.log(form.value.email);
    console.log(form.value.profissao);
  }

}

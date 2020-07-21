import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = '';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar(nome: string) {
    console.log(nome);

    ++this.ultimoId;
    // this.nome = this.ultimoId + " - " + nome;
    this.adicionado = true;

    const funcionario = {
      id: this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }
}

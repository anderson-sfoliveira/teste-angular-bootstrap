import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
//  styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionarioCard: any;
  // para que outro componente possa acessar essa propriedade usamos o decorador @Input()

  isAdmin() {
    return this.funcionarioCard.nome.startsWith('T');
  }

  getEstilosCartao() {
    return {
      'background-color': this.funcionarioCard.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }
}

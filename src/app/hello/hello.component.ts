import { Component } from '@angular/core';

@Component({
    selector: 'hello', // nome da tag para usar o componente = <hello></hello>
    template: `
        <h2>
            Hello {{nome}}
        </h2>
    `
//    templateUrl: './hello.component.html' -> caso queira usar um arquivo html externo
})

export class HelloComponent {

    nome = 'Anderson'

}
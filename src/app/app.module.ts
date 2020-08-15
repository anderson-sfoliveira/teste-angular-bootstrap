import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { TestePipesComponent } from './teste-pipes/teste-pipes.component';
import { TesteFormComponent } from './teste-form/teste-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    TestePipesComponent,
    TesteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

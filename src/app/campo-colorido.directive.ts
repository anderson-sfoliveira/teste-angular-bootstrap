import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') codDeFundo: string;

  // focus =  evento do HTML de quando o elemento ganha o foco.
  @HostListener('focus') colorir() {
    this.codDeFundo = this.cor;
  }

  // blur =  evento do HTML de quando o elemento perde o foco.
  @HostListener('blur') descolorir() {
    this.codDeFundo = 'transparent';
  }

}

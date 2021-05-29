import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "http://angular.io/assets/images/logos/angular/angular.svg";
  public name: string = "";
  public keyUpName: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  keyUpBinding(event: any){
    this.keyUpName = event.target.value;
  }

  handleName(event: any){
    if(event.key === "Enter"){
      this.name = event.target.value;
      event.target.value = ''
    }
  }
}



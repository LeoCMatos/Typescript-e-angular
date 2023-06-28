import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  name: string = 'Leonardo'
  age: number = 21
  profissao: string = 'Analista e desenvolvedor de sistemas'
  hobbie = ['Correr', 'Passear', 'Andar']
  car = {
    modelo: 'polo',
    ano: '2019',
  }

}

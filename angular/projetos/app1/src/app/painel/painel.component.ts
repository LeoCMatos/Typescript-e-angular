import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
   
          //trocar pergunta da rodada
      this.rodada++
      // progresso
      
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      //atualiza o objeto rodada
       this.atualizaRodada()


    } else {
      alert('A tradução está errada')
      //diminuir a varivavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        alert('Você perdeu todas tentativas')
      }
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase =  this.frases[this.rodada]
    //limpar rodada
    this.resposta = ''
  }

}

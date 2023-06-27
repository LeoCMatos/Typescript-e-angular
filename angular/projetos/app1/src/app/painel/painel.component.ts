import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

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

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnDestroy() {
    console.log('componente painel foi destruido')
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

      //atualiza o objeto rodada
       this.atualizaRodada()

       if(this.rodada === 4){
        this.encerrarJogo.emit('Vitoria')
       }

    } else {
      alert('A tradução está errada')
      //diminuir a varivavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
      } 
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase =  this.frases[this.rodada]
    //limpar rodada
    this.resposta = ''
  }

  
}

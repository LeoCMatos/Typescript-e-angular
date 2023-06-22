"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorariosDeFuncionamento() {
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00';
    }
}
exports.default = Concessionaria;

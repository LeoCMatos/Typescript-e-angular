"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(object) {
        console.log('logica insert');
        return true;
    }
    atualizar(object) {
        console.log('logica atualizar');
        return true;
    }
    remover(id) {
        console.log('logica remover');
        return Object();
    }
    selecionar(id) {
        console.log('logica selecionar');
        return Object();
    }
    selecionarTodos() {
        console.log('logica selecionarTodos');
        return [Object()];
    }
}
exports.Dao = Dao;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('logica selecionar');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('logica selecionarTodos');
        return [new Pessoa_1.default('', '')];
    }
}
exports.PessoaDao = PessoaDao;

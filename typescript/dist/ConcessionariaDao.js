"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
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
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('logica selecionar');
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('logica selecionarTodos');
        return [new Concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;

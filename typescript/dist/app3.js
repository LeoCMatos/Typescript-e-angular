"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let carro = new Carro_1.default('Veloster', 3);
let moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
carro.acelerar();
carro.acelerar();
let concessionaria = new Concessionaria_1.default('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorariosDeFuncionamento());

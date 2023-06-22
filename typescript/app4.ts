//import { ConcessionariaDao } from "./ConcessionariaDao";
import { Dao } from './Dao'

import Concessionaria from './Concessionaria'
//import { PessoaDao } from "./PessoaDao";
import Pessoa from "./Pessoa";

//let dao:ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])

//let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa('','')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()


dao3.inserir(concessionaria)
dao4.remover(5)
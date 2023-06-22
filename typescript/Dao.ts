import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''
    inserir(object: T): boolean {
        console.log('logica insert')
        return true
    }
    atualizar(object: T): boolean {
        console.log('logica atualizar')
        return true
    }
    remover(id: number): T{ 
        console.log('logica remover')
        return Object()
    }
    selecionar(id: number): T{ 
        console.log('logica selecionar')
        return Object()
    }
    selecionarTodos(): [any]{ 
        console.log('logica selecionarTodos')
        return [Object()]
    }
}
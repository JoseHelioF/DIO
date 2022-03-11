class contaBancaria {
    constructor(agencia, tipo, numero) {
        this.agencia = agencia;
        this.tipo = tipo;
        this._saldo = 0;
        this.numero = numero;
    }
    get() {
        return this._saldo;
    }
    set(saldo) {
        return this._saldo = valor;
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Corrente"
        this._cartaoCredito = "cartaoCredito"
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Poupanca"

    }
}
class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Universitaria"

    }
    sacar(valor) {
        if (valor < 500) {
            return "Operação Negada!";
        }
        this._saldo = this._saldo - valor;
    }
}
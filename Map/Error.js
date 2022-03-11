function validaArr(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie um parametro");
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if (typeof num !== 'number') throw new TypeError("Valor precisa ser do tipo numero");
        if (arr.lenght !== num) throw new RangeError("Tamanho Invalido");
        return arr;

    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("É um reference error");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("É um Range error");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("É um Type error");
            console.log(e.message);
        } else
            console.log("É um tipo de erro nao esperado" + e);
    }
}

console.log(validaArr(5, 5));
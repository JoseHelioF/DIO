//Nao retorna Array e sim Set

// const meuArray = [30,30,40,5,223,2049,3034,5];

// function valoresUnicos(arr){
//     const mySet = new Set(arr);
//     return mySet
// }

// console.log(valoresUnicos(meuArray));


//Retorna Array e sim Set

const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet]
}

console.log(valoresUnicos(meuArray));
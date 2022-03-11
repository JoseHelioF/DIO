const usuarios = new Map();

function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
    if (value === "admin"){
        admins.push(key)
    }

    }
    return admins
}

usuarios.set("Luiz","admin")
usuarios.set("Sthephany","admin")
usuarios.set("Jorge","user")
usuarios.set("Natalia","admin")
console.log('Tere');
console.log(getAdmins(usuarios));
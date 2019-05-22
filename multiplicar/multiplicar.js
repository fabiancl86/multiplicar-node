const fs = require('fs'); //paquete nativos de node


let crearArchivo = (base) => { //recibe el parametro base

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un número`);
            return; //para no seguir con el codigo
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i} = ${base*i}\n`; //+=concatena
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //crea el archivo, guarda data, callback
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //limite por defecto
        }
    })
    .help()
    .argv;

//tipos de require
//const fs = require('fs'); //paquete nativos de node
//const fs = require('express'); //libreria de terceros
//const fs = require('./path'); //archivos nuestros
const { crearArchivo } = require('./multiplicar/multiplicar.js'); //incluyo el archivo con la funcion de crear Archivo


//let base = '99';

//console.log(process.argv);

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv.base);
//console.log(argv2);

// let data = '';

//         for (let i = 1; i <= 10; i++) {

//             data += `${base} * ${i} = ${base*i}\n`; //+=concatena
//         }

//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //crea el archivo, guarda data, callback
//             if (err) throw err;
//             console.log(`El archivo tabla-${base}.txt ha sido creado!`);
//         });

// console.log(process.argv);

// let argv = process.argv; //para enviar parametros por consola
// let parametro = argv[2]; //3er argumento
// let base = parametro.split('=')[1]; //separa el igual y toma el 2do argumento. convierte de string a arreglo

// crearArchivo(base) //manejar promesa
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => { console.log(err); })
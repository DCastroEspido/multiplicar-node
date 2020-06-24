const fs = require('fs');
const colors = require('colors');

let data = '';

let listTable = (base, limite = 10) => {
		if (!Number(base) || !Number(limite)) {
			console.log(`El valor introducido ${base} no es un número`);
			return;
		}
        console.log('====================='.green);
        console.log(`tabla del ${ base }`.green);
        console.log('====================='.green);

        if (limite >= 1) {
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${base * i}`);
            }
        }else{
            console.log('Límite no válido');
        }

};

let createFile = (base, limite = 10 ) => {
	return new Promise((resolve, reject) => {
		if (!Number(base) || !Number(limite)) {
			reject(`El valor introducido en los parámetros no es correcto.`);
			return;
		}
		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
			if (err) reject(err);
			resolve(`tabla-${base}.txt`);
		});
	});
};

module.exports = {
	createFile,
	listTable,
};

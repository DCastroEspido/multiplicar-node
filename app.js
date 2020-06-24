const { createFile, listTable } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
	case 'crear':
		{
			console.log('Ejecutando operación de crear'.green);
			createFile(argv.base, argv.limite)
				.then((result) => {
					console.log(`Archivo creado: ${colors.grey(result)}`);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		break;
	case 'listar':
		{
			console.log('Ejecutando operación de listar');
			listTable(argv.base, argv.limite);
		}
		break;
	default: {
		console.log('Comando no reconocido');
	}
}

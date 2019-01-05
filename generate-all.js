
// em criação
// necessário compilar todos os templates em "~sites/" a partir deste arquivo

const { exec } = require('child_process');


process.env.site = 'MeuSite';
const child = exec('npm run generate');
child.stdout.pipe( process.stdout );
child.stderr.pipe( process.stderr );

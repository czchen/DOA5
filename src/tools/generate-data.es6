#!/usr/bin/env node
import bunyan from 'bunyan';
import bunyanBlackhole from 'bunyan-blackhole';
import readline from 'readline';
import YAML from 'yamljs';
import yargs from 'yargs';

let logger = bunyanBlackhole();

const convertCommand = (command) => {
    logger.trace({command: command}, 'convertCommand');
    return command;
};

const main = () => {
    const argv = yargs.usage('Convert command format from <http://deadoralive.wikia.com/wiki/Dead_or_Alive_Wiki>.\n\n' +
                             'usage: $0 [-v | --verbose] [-h | --help] [-in FILE] [-out FILE]')
                .boolean(['v'])
                .help('h')
                .alias('h', 'help')
                .alias('o', 'output')
                .alias('v', 'verbose')
                .argv;

    if (argv.v) {
        logger = bunyan.getLogger();
    }

    logger.trace({argv: argv}, 'main');

    const res = [];
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.on('line', (line) => {
        let data = line.split('\t');
        res.push({
            name: data[0],
            type: data[1],
            command: convertCommand(data[2]),
        });
    });

    console.log(res);
};

main();

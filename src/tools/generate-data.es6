#!/usr/bin/env node
import bunyan from 'bunyan';
import bunyanBlackhole from 'bunyan-blackhole';
import yargs from 'yargs';

let logger = bunyanBlackhole();

const main = () => {
    const argv = yargs.usage('Convert command format from <http://deadoralive.wikia.com/wiki/Dead_or_Alive_Wiki>.\n\n' +
                             'usage: $0 [-v | --verbose] [-h | --help]')
                .boolean(['v'])
                .help('h')
                .alias('h', 'help')
                .alias('v', 'verbose')
                .argv;

    if (argv.v) {
        logger = bunyan.getLogger();
    }

    logger.trace('main');
};

main();

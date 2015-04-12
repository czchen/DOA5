import bunyan from 'bunyan';
import bunyanBlackhole from 'bunyan-blackhole';
import yargs from 'yargs';

let logger = bunyanBlackhole();

const main = () => {
    argv = yargs.usage('Usage $0 [-v | --verbose] [-h | --help]')
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

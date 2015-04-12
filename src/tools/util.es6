import bunyan from 'bunyan';
import bunyanBlackhole from 'bunyan-blackhole';
import Immutable from 'immutable';

let logger = bunyanBlackhole();

exports.setLogger = (newLogger) => {
    logger = newLogger;
};

const convertTable = Immutable.fromJS([
    {full: 'Punch Button', short: 'P'},
    {full: 'Kick Button', short: 'K'},
    {full: 'Hold Button', short: 'H'},
]);

exports.convertCommand = (cmd) => {
    logger.trace({cmd: cmd}, 'convertCommand');

    let res = [];

    while (cmd !== '') {
        let match;

        for (let i = 0; i < convertTable.size; ++i) {
            if (cmd.startsWith(convertTable.get(i).get('full'))) {
                match = convertTable.get(i);
                break;
            }
        }

        if (!match) {
            throw new Error(`Unknown command ${cmd}`);
        }

        res.push(match.get('short'));
        cmd = cmd.substr(match.get('full').length);
    }

    return res;
};

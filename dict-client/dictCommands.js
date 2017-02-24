module.exports = () => {
    let commands = {
        HELP: {
            action: 'HELP\r\n'
            , execute: () => {
                let help = commands.HELP;
                return help.action;
            }
        }
        , SHOW: {
            action: 'SHOW '
            , execute: (obj) => {
                let show = commands.SHOW;
                return `${show.action} ${obj}\r\n`;
            }
        }
        , DEFINE: {
            action: 'DEFINE '
            , execute: (db, word) => {
                let define = commands.DEFINE;
                if (db === null) {
                    return `${define.action} * ${word}\r\n`;
                }
                return `${define.action} ${db} ${word}\r\n`;
            }
        }
        , MATCH: {
            action: 'MATCH '
            , execute: (db, strat, word) => {
                let match, request;
                match = commands.MATCH;
                if (db === null && strat === null) {
                    request = `${match.action} * . ${word}\r\n`;
                }
                else if (db === null && strat != null) {
                    request = `${match.action} * ${strat} ${word}\r\n`;
                }
                else {
                    request = `${match.action} ${db} ${strat} ${word}\r\n`;
                }
                return request;
            }
        }
        , QUIT: {
            action: 'QUIT\r\n'
            , execute: () => {
                let quit = commands.QUIT;
                return quit.action;
            }
        }
    };
    return commands;
};
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
                return `${define.action} ${db} ${word}\r\n`;
            }
        },
        QUIT: {
           action: 'QUIT\r\n'
            , execute: () => {
                let quit = commands.QUIT;
                return quit.action;
            } 
        }
    };
    return commands;
};
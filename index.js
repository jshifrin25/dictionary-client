(function () {
    'use strict';
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin
        , output: process.stdout
        , prompt: ' |{'
    });
    let dictClient = require('./dict-client/main');
    rl.on('line', (line) => {
        if (line.trim().toUpperCase().startsWith('SHOW')) {
            let args = getArgs(line);
            dictClient.show(args[1].toUpperCase());
            rl.prompt();
        }
        else if (line.trim().toUpperCase().startsWith('D')) {
            let args = getArgs(line);
            if (args.length === 2) {
                dictClient.define(null, args[1]);
            }
            else {
                dictClient.define(args[1], args[2]);
            }
            rl.prompt();
        }
        else if (line.trim().toUpperCase().startsWith('M')) {
            let args = getArgs(line);
            if (args.length === 2) {
                dictClient.match(null, null, args[1]);
            }
            else if (args.length === 3) {
                dictClient.match(null, args[1], args[2]);
            }
            else {
                dictClient.match(args[1], args[2], args[3]);
            }
            rl.prompt();
        }
        else if (/^[Qq][uU]?[iI]?[tT]?/.test(line.trim())) {
            dictClient.quit();
            rl.close();
        }
        else {
            dictClient.help();
            rl.prompt();
        }
    }).on('close', () => {
        console.log('Thanks for using the dictionary repl');
        process.exit(0);
    });

    function getArgs(line) {
        let args = line.split(" ");
        console.log(args);
        return args;
    }
}());
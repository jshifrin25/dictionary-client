(function () {
    let net = require('net');
    let notify = () => {
        console.log('Server connection was established');
    };
    const api = {
        responseHandler: (data) => {
            console.log(data.toString());
        }
        , onData: (inst) => {
            inst.client.on('data', api.responseHandler);
        }
    };
    
    module.exports = () => {
        let comms = require('./dictCommands')();
        let clientObj = {
            client: null
            , init: () => {
                clientObj.client = net.connect({
                    port: 2628
                    , host: 'dict.org'
                }, notify);
                api.onData(clientObj);
                return clientObj;
            }
            , help: () => {
                let msg = comms.HELP.execute();
                clientObj.client.write(msg);
            }
            , define: (db, word) => {
                let msg = comms.DEFINE.execute(db, word);
                clientObj.client.write(msg);
            }
            , show: (obj) => {
                let msg = comms.SHOW.execute(obj);
                clientObj.client.write(msg);
            }
            , quit: () => {
                let msg = comms.QUIT.execute();
                clientObj.client.write(msg);
                clientObj.client.end();
            }
        };
        return clientObj;
    };
}());
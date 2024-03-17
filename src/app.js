const { envs } = require('./config/env');

const { startServer } = require('./server/server');

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Funcion agnóstica autoconvocada
//Agnóstica por que no tiene nombre
//Antoconvocada porque la ejecutamos con los parentesis.
(async () =>{
    main()
})()


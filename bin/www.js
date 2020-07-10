#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('demo:server');

/* import typeDefs resolvers ApolloServer */
const { ApolloServer } = require("apollo-server-koa");
const typeDefs = require("../model/schema/index.js");
const resolvers = require("../model/resolver/index.js");
// 引入数据源
const db = require("../data/mysql.config.js");

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

/**
 * Create Apollo server.
 */

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ db }),
    context: (app) => {
        const method = app.ctx.method;
        return {
            method,
            uid: "20202020",
        };
    },
    tracing: true,
});

/* apply server as middleware */
server.applyMiddleware({ app });

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => {
    console.log("please open localhost:3000, to experience graphql, open localhost:3000/graphql")
});
app.on('error', onError);
app.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

# dazn-tech-challenge
Technical challenge for DAZN

### Pre-requisites
* Node 8 or above
* NPM

After cloning the project, be sure to run:
```
npm i
```

### Terminal commands
All of the following commands should be used via terminal inside the root directory of the project.

Project configuration can be found in the config.json file in the root directory.

Run the project and watch for file changes
```
npm start
or
nodemon .
```
This will launch the project at http://localhost:9000 unless changed in the config file

Run the tests
```
npm test
```

Run linting rules
```
npm run lint
```

### Endpoints
**GET /connections/new/:userId**

Creates a new connection for the specified user id.

*Example Success Response*
```
{
    "success": true,
    "connection": {
        "connectionId": "123-2018-08-06T21:12:43.182Z",
        "userId": "123"
    }
}
```

*Example Failed Response*
```
{
    "success": false,
    "error": {
        "code": "CODE_MAXIMUM_CONNECTIONS",
        "message": "Maximum number of connections exceeded"
    }
}
```

### Further tasks (mainly for scaling and reliability)

1. Replace in-memory connection store with shared data storage (E.g. Redis, MYSQL, MongoDB)
2. Separate out communication layer using something like RabbitMQ
3. Integrate something like new relic for performance monitoring

# dazn-tech-challenge
Technical challenge for DAZN

### How to run the project
To run locally just use:
```
nodemon .
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
    "message": "no connections available for user 123"
}
```

var client = require('socket.io-client');

var socket = client.connect('http://localhost:3000');

// join the room
socket.emit('room', 'TeamRoom');


//When a backlog request event is fired, fire a backlogResponse
socket.on('backlogRequest', function() {

    var backlogs = [{
        id: 'B-12345',
        title: 'As a Partner I want...',
        url: 'http://www.google.com'
    },{
        id: 'B-12346',
        title: 'As an Employee I want...',
        url: 'http://www.google.com'
    }, {
        id: 'B-12347',
        title: 'As a Customer I want...',
        url: 'http://www.google.com'
    }];
    socket.emit('backlogResponse', backlogs);

});
console.log('Backlog Provider Running');





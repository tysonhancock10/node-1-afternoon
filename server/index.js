const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controllers/messages_controllers')
const app = express();

app.use( bodyParser.json())
app.use(express.static( __dirname + '/../public/build' ) );


const port = 3001;

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, ctrl.create)
app.get(messagesBaseUrl, ctrl.read)
app.put(`${messagesBaseUrl}/:id`, ctrl.update)
app.delete(`${messagesBaseUrl}/:id`, ctrl.delete)
app.listen( port, () => {
    console.log(`Server listening on port ${port}`);
})
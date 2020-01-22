require('custom-env').env(process.env.NODE_ENV)
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var bodyParser = require('body-parser')
app.set('io', io);
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var indexRouter = require('./routes/index');
var controller = require('./services/controller')

app.use('/api', indexRouter);

http.listen(3000, () => console.log(`Example app listening on port`))

io.on('connection', (socket) => {
    console.log('Client connected')
    socket.emit('abc')
    socket.on('acceptOrder', (order) => {
        console.log('acceptOrder-----------: ' + JSON.stringify(order));
        controller.confirmOrder(io, order)
    });

    socket.on("orderRequested", (orderObj) => {
        console.log('orderRequested-----------: ' + JSON.stringify(orderObj));
        controller.orderRequested(io, orderObj)
    })

    socket.on("setOrderStatus", (orderStatusObj) => {
        controller.setOrderStatus(io, orderStatusObj)
    })
})






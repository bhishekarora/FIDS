const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

const app2 = express();
global.__basedir = __dirname;
// const path = __dirname + '/app/views/';
// app.use(express.static(path));
app.use(express.static(__dirname + '/app/data/uploads'));
var corsOptions = {
  origin: "*",
  methods: ["GET", "POST","PUT"]
};

app.use(cors(corsOptions));
app2.use(cors(corsOptions));


app2.post('/send-notification', (req, res) => {
  const notify = {data: req.query.message};
  socket.emit('notification', notify); // Updates Live Notification
  res.send(notify);
});

const server = app2.listen(3000, () => {
console.log(`Server connection on  http://localhost:3000`);  // Server Connnected
});
// Socket Layer over Http Server
const socket = require('socket.io')(server,{

  cors: {
    origin: "*",
    methods: ["GET", "POST","PUT"],
   
  }
});
// On every Client Connection
socket.on('connection', socket => {
  console.log('Socket: client connected');
});


// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */
app2.use(express.json()); /* bodyParser.json() is deprecated */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app2.use(express.urlencoded({ extended: true })); /* bodyParser */

const db = require("./app/models");

db.sequelize.sync();
//drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
  db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
  initial();
});
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cms application." });
});

//require("./app/routes/turorial.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

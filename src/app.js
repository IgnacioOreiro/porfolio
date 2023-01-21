const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require("method-override");
const session = require('express-session');
const path = require("path")

const PORT = 3001;
app.listen(PORT, console.log("listening on port " + PORT + "   -->  http://localhost:" + PORT ));

app.use(session({secret: 'Secret', resave: false, saveUninitialized: false}))


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('../public'));
app.use(express.json());
app.use(methodOverride('_method'));

app.use("/", mainRouter);


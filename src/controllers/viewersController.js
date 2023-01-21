const PORT = 3001;
const express = require("express");
const app = express();
const path = require("path");



const viewersControllers = {

    viewers: (req, res) => {
        console.log("Entre en viewers --> http://localhost:" + PORT + "/viewers")
        res.render("viewers/viewersIndex")
    }
}

module.exports = viewersControllers;
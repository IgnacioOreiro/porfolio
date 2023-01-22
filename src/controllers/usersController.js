const PORT = 3001;
const express = require("express");
const app = express();
const path = require("path");



const usersControllers = {

    users: (req, res) => {
        console.log("Entre en users --> http://localhost:" + PORT + "/users")
        res.render("users/usersIndex")
    }
}

module.exports = usersControllers;
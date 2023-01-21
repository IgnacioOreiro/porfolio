const PORT = 3001;
const proyectsControllers = {

    proyects: (req, res) => {
        console.log("Entre en proyects --> http://localhost:" + PORT + "/proyects");
        res.render("proyects/proyectsIndex");
    }
}

module.exports = proyectsControllers;
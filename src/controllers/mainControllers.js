const PORT = 3001;

const mainControllers = {

    home: (req, res) => {
        console.log("Entre al home");
        res.render('index')
    }

}

module.exports = mainControllers;
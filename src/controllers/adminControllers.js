const PORT = 3001;
const adminControllers = {

        admin: (req, res) => {
                console.log("Entre en admin --> http://localhost:" + PORT + "/admin");
                res.render("admin/adminIndex");
        }
}

module.exports = adminControllers;

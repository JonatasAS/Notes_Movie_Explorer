const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();

const usersController = new UsersController();

/* function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware");

    if (!request.body.isAdmin) {
        return response.json({ message: "user unauthorized" });
    }

    next();
} */

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;
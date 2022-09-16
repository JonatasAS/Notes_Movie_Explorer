const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response){
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("O campo nome e obrigatório!")
    }

    return response.status(201).json();
  }
}

module.exports = UsersController;
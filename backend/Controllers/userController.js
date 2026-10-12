const jwt = require("jsonwebtoken");
const knex_DB = require("../DataBase/knex_DB");

const UserController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await knex_DB("users").where({ email, password }).first();

      if (!user) {
        return res.status(401).json({ message: "Email ou senha incorretos!" });
      }

      return res.status(200).json({ message: "Login realizado com sucesso!" });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      return res.status(500).json({ message: "Erro interno ao realizar login." });
    }
  },

  createUser: async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
      await knex_DB("users").insert({ name, email, password, role });
      return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return res.status(500).json({ message: "Erro ao cadastrar usuário!" });
    }
  },

  authenticateUser: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "E-mail e senha são obrigatórios." });
    }

    try {
      const user = await knex_DB("users").where({ email }).first();

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      if (user.password !== password) {
        return res.status(401).json({ message: "Senha incorreta!" });
      }

      const secretKey = process.env.SECRET_KEY;
      if (!secretKey) {
        console.error("SECRET_KEY não está configurada.");
        return res.status(500).json({ message: "Erro interno ao autenticar." });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name, role: user.role },
        secretKey,
        { expiresIn: "48h" }
      );

      return res.status(200).json({
        message: "Login realizado com sucesso!",
        token,
      });
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      return res.status(500).json({ message: "Erro interno ao autenticar." });
    }
  },
};

module.exports = UserController;

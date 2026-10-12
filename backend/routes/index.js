const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Auth");


const knex_DB = require("../DataBase/knex_DB");
const SECRET_KEY = "sushigo0509";


Router.get("/", /*auth,*/ (req, res) => {
  //res.json({ user: req.loggedUser});
  res.send('testando');
});

Router.post("/users", async (req, res) => {
  let { email, password } = req.body;
  try{
let query  = await knex_DB("users").where({ email, password }).select("*");
  if (query.length > 0) {
    res.status(200).json({ message: "Login realizado com sucesso!" });
    
  } else {
    res.status(401).json({ message: "Email ou senha incorretos!" });
  }
  }catch(errror){
    console.log(`Erro ao realizar login: ${errror}`);
  }
});

Router.post("/register", async(req,res)=>{
  const {name, email, password, role} = req.body;
  if(name && email && password && role){
    knex_DB('users').insert({name, email, password, role}).then(data =>{
      console.log(data)
      res.status(200).json({message: "Usuário cadastrado com sucesso!"})
    }).catch(err =>{
      console.log(err)
      res.status(500).json({message: "Erro ao cadastrar usuário!"})
    })
  }
})

Router.post("/auth", async (req, res) => {
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
      
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name, role: user.role }, SECRET_KEY, { expiresIn: "48h" },(error,token)=>{
      if(error){
        console.error("Erro ao gerar token JWT:", error);
        return res.status(500).json({ message: "Erro interno ao gerar token." });
      }else{
         res.status(200).json({
          message: "Login realizado com sucesso!",
          token: token,
        });
      }
    });

  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    return res.status(500).json({ message: "Erro interno ao autenticar." });
  }
});



module.exports = Router;
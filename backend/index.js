//Config
const express = require("express");
const App = express();
const cors = require("cors");

//DBConfig
const Data = require("./DataBase/Db");
const User_DB = require("./DataBase/User_Db");
const knex_DB = require("./DataBase/knex_DB");
Data.sync();

//UrlConfig
App.use(cors());
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

const teste = {
  name: "Julio",
  email:"julio.dev.santana@gmail.com",
  password: "sushigo0509",
  role: "admin",
}

App.get("/", (req, res) => {

knex_DB('users').insert(teste).then(data =>{
  console.log(data)
}).catch(err =>{
  console.log(err)
})
  res.send("Olá mundo!");
});

App.post("/users", async (req, res) => {
  let { email, password } = req.body;
  console.log(`${email} ${password}`);
});

App.post("/register", async(req,res)=>{
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

App.listen(3000, () => {
  console.log("rodando na porta 3000");
});

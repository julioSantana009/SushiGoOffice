
//chave secreta para o JWT
const SECRET_KEY = "sushigo0509";

const auth = (req, res, next) => {
  let authToken = req.headers["authorization"];

if (authToken != undefined) {
    let token = authToken.split(" ")[1];
    jwt.verify(token, SECRET_KEY,(error ,data)=>{
      if(error){
        res.status(401).json({message: "Token inválido!"})
      }else{
        req.token = token;
        req.loggedUser = {id: data.id, email: data.email, name: data.name, role: data.role}
        next();
      }
    } )
  }else{
    res.status(401).json({message: "Token não fornecido!"})
  }
  
}


module.exports = auth;
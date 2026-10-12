import axios from "axios";
import { axiosConfig } from "../../AxiosConfig/AxiosConfig";
import{useState,useEffect} from "react";

const Home = () => {
  const [user,setUser] = useState([]);

  const request = async () => {
    axios.get("http://localhost:3000/", axiosConfig).then((response)=>{
    console.log(response.data.user)
    setUser(response.data.user)
   

  }).catch(error=>{
    console.log(error)
  })
}
    
    useEffect(()=>{
request()
    },[])


  return (
    <>
    <h1>Bem vindo {user.name}</h1>
    </>
  );
};

export default Home;

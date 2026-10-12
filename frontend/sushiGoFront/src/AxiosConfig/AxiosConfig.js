  
  export const axiosConfig ={
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  }



import { Layout } from "@/components/layout"
import { useEffect } from "react"
import axios from 'axios';
import UsersApi from "@/apis";

export default function Explore (){
  
  const getUsers = async() =>{
    try{
      const res = await UsersApi.get('/users');
      const {data}= res;
      console.log(data)
    }catch(error){
      console.log(error)
    }
    
  
  }
  useEffect(()=>{
   
    getUsers();

  },[])
  
  return (
    <Layout>

    </Layout>
  )
}

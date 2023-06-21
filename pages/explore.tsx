
import usersApi from "@/apis"
import { Layout } from "@/components/layout"
import { getUsers } from "@/utils"
import { useEffect, useState } from "react"


export default function Explore (){
  const [users, setUsers] = useState([])



  useEffect(()=>{
   
   getUsers()
   .then((res)=>{
      setUsers(res);
   })
   .catch((err)=>{
    console.log(err)
   })
  
  },[])

  return (
    <Layout>

    </Layout>
  )
}

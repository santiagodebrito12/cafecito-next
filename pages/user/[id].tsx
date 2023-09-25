import React, { useEffect,useState } from 'react'
import { Layout } from '@/components/layout'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { IUser, User } from '@/models'
import { getUsers, getUserById } from '@/utils';
import  usersApi  from '@/apis';
import {DetailHeader,DescriptionDetail,Donaciones} from '@/components/ui/UserDetail'
import { useSelector } from 'react-redux';


interface HomeProps {
  user:IUser
}

export default function UserPage ({user}:HomeProps) {
  const{userLogin}=useSelector((state:any)=>state.loginState);
  
  const [detailState, setdetailState] = useState('perfil')
  
  return (
    <Layout>
      
      <div className="contenedor-perfil  ">
                
                <DetailHeader user={user} setdetailState={setdetailState} userLogin={userLogin}/>
                  
                 

                  <div className="container-fluid">
                <div className="row  contenedor-info d-flex justify-content-center">
                   
                    <DescriptionDetail user={user} userLogin={userLogin}/>


                    <Donaciones user={user}/>
           
                  </div>
                </div>
        </div>
      
    </Layout>
  )
}



export async function getStaticPaths() {
  try {
    const res = await usersApi.get('/users');
    const users = await res.data;

    const paths = users.map((item:any) => ({  
      params: { id: item._id },
    }));

    return{
      paths,
      fallback:'blocking'
    }
  } catch{
    return{
      paths:[],
      fallback:'blocking'
    }
  }
  
}

export const getStaticProps: GetStaticProps<{user: any}> = async (ctx:any) => {
  const {id}=ctx.params;
  const res = await fetch(`http://localhost:3000/api/users/${id} `)
  const user = await res.json()
  
  if(user.message){
    return{   
       redirect:{
         destination:'/',
        permanent:false,
      }
     }
  }else{
    return { 
      props: { user },
      revalidate:86400,//24 hours
    }
  }
 

}

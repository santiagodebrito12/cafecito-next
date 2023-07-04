import React, { useEffect } from 'react'
import { Layout } from '@/components/layout'
import {GetStaticPaths} from 'next'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { IUser, User } from '@/models'
import { getUsers, getUserById } from '@/utils';
import  usersApi  from '@/apis';
import { get } from 'http';
import path from 'path';

interface HomeProps {
  user:IUser
}

export default function UserPage ({user}:HomeProps) {
    console.log(user)

    return (
    <Layout>
        <h1>user page</h1>
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

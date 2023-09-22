import {useState} from 'react';
import axios from 'axios';
import { Layout } from "@/components/layout";

import usersApi from '@/apis';
import { User } from '@/interfaces';
import Link from 'next/link';

export default function NewUser(){
    
    const [newUser, setNewUser] = useState<User>({
        categoria:"",
        descripcion:"",
        donaciones :"0",
        nombre:"",
        email:"",
        password:"",
    });
 
    const handleChange = (e:any) => {
        console.log(e.target.value);
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e:any)=>{
        e.preventDefault();
        const res = await usersApi.post('/users', newUser);
        console.log(res);
    }

    return(
        <Layout>
            <div className='container-fluid'>
            <div className="contenedor-form">
                <h2 className="text-center">Sign in to Waves</h2>
                <form>
                  
                       
                        <input type="text" id="nombre" placeholder="Name" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                   
                
              
                       
                        <input type="text"    id="descripcion" placeholder="Description" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    
       
                       
                       <input type="text"   id="categoria" placeholder="category" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                   

                        <input type="email"    id="email" placeholder="Email" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                 
                    
                       
                        <input type="password"  id="password" placeholder="Password" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                   
               
                        
                        <input type="password"   id="rpassword" placeholder="Repeat password" />
                   
                    
                  
                   

                  

                    <button  className="btn m-auto btn-sign-in" onClick={()=>{
                        handleSubmit(event)
                    }}>Sign in</button>
                </form>
                <Link href="/login" className='link-to-account'><p>Already have an account? Login</p></Link>
            </div>
            
            </div>
            


        </Layout>
    )
}
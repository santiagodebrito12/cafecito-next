import {useState} from 'react';
import axios from 'axios';
import { Layout } from "@/components/layout";

import usersApi from '@/apis';
import { User } from '@/interfaces';

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
            <div className="container  contenedor-sign-in">
                <h2 className="text-center">Sign in to Waves</h2>
                <form>
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="text" className="form-control  p-2 m-2 text-center" id="nombre" placeholder="Name" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    </div>
                
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="text" className="form-control  p-2 m-2 text-center" id="descripcion" placeholder="Description" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                       
                       <input type="text" className="form-control  p-2 m-2 text-center" id="categoria" placeholder="category" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                   </div>

                    <div className="form-group d-flex justify-content-center">
                        <input type="email" className="form-control  p-2 m-2 text-center" id="email" placeholder="Email" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="password" className="form-control  p-2 m-2 text-center" id="password" placeholder="Password" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        
                        <input type="password" className="form-control  p-2 m-2 text-center" id="rpassword" placeholder="Repeat password" />
                    </div>
                    
                  
                   

                  

                    <button  className="btn m-auto btn-sign-in" onClick={()=>{
                        handleSubmit(event)
                    }}>Sign in</button>
                </form>
            </div>


        </Layout>
    )
}
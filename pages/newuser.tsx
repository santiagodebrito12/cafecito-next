import {useState} from 'react';
import axios from 'axios';
import { Layout } from "@/components/layout";

import usersApi from '@/apis';

export default function NewUser(){
    
 


    const handleSubmit = async (e:any)=>{
        e.preventDefault();
      
    }

    return(
        <Layout>
            <div className="container  contenedor-sign-in">
                <h2 className="text-center">Sign in to Waves</h2>
                <form>
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="text" className="form-control  p-2 m-2 text-center" id="name" aria-describedby="emailHelp" placeholder="Name"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="text" className="form-control  p-2 m-2 text-center" id="lastName" placeholder="Last name"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="email" className="form-control  p-2 m-2 text-center" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                       
                        <input type="password" className="form-control  p-2 m-2 text-center" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        
                        <input type="password" className="form-control  p-2 m-2 text-center" id="rpassword" placeholder="Repeat password"/>
                    </div>
                    
                  
                   

                  

                    <button  className="btn m-auto btn-sign-in" onClick={()=>{
                        handleSubmit(event)
                    }}>Sign in</button>
                </form>
            </div>


        </Layout>
    )
}
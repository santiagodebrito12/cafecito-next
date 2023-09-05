import React from 'react'
import { Layout } from '@/components/layout'

export default function Login() {
  return (
    <Layout>
        <div className="contenedor-login">

        <h2 >Login</h2>
        <div className=' d-flex justify-content-center '>
            <form className='d-flex justify-content-center flex-column'>
                <div className="form-group">
                    <input type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control w-100 mt-3" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button className=' btn btn-sign-in mt-3'>Login</button>
            </form>
        </div>
        </div>
    </Layout>
  )
}

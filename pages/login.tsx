import React from 'react'
import { Layout } from '@/components/layout'
import Link from 'next/link'
export default function Login() {
  return (
    <Layout>
        <div className='container'>
        <div className="contenedor-form contenedor-login">

                <h2 className='text-center'>Login</h2>
                
                    <form>
                        <input placeholder='Email' type='email'/>
                        <input placeholder='Password' type='password'/>
                        <button className=' btn btn-sign-in mt-3'>Login</button>
                    </form>
                    {/* <form className='d-flex justify-content-center flex-column'>
                        <div className="form-group">
                            <input type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control w-100 mt-3" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button className=' btn btn-sign-in mt-3'>Login</button> */}
              <Link href="/newuser" className='link-to-account'><p>Need to sign up?</p></Link>
        </div>
        </div>
       
    </Layout>
  )
}

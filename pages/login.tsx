import React from 'react'
import { useState } from 'react'
import { Layout } from '@/components/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { setUser } from '@/store/slices/loginState';
import { useSelector, useDispatch } from 'react-redux';
import usersApi from '@/apis'

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch()
    const [error,setError]=useState(false);
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e: any) => {
        setUserLogin({
            ...userLogin,
           [e.target.name]: e.target.value
         })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await usersApi.get('/login', { params: userLogin });
            dispatch(setUser(res.data));
            router.push(`/user/${res.data._id}`)
        } catch (error) {
            setError(true);
            setTimeout(()=>{
                setError(false)
                },2000)
        }
        
       
    }

    return (
    <Layout>
        <div className='container'>
        <div className="contenedor-form contenedor-login">

                <h2 className='text-center'>Login</h2>
                
                    <form>
                        {error && <div className="alert alert-danger text-center">User or password invalid</div>}
                        <input placeholder='Email' type='email' name='email' onChange={handleChange}/>
                        <input placeholder='Password' type='password' name='password' onChange={handleChange}/>
                        <button className=' btn btn-sign-in mt-3' onClick={(e)=>{
                            handleSubmit(e)
                        }}>Login</button>
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

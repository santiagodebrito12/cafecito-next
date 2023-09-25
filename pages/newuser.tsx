import {useState} from 'react';
import { Layout } from "@/components/layout";
import { useRouter } from 'next/router';
import usersApi from '@/apis';
import { User } from '@/interfaces';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/loginState';

export default function NewUser(){
    const router = useRouter();

   
   
    const dispatch = useDispatch()

    const [newUser, setNewUser] = useState<User>({
        categoria:"",
        descripcion:"",
        donaciones :"0",
        nombre:"",
        email:"",
        password:"",
        
    });

    const[error,setError]=useState(false);

    
    const handleChange = (e:any) => {
       
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e:any)=>{
        e.preventDefault();
        if(!newUser.categoria || !newUser.descripcion || !newUser.nombre || !newUser.email || !newUser.password){
            console.log('todos los campos son obligatorios')   
            setError(true);
           
            setTimeout(()=>{
               setError(false)
            },2000)
   
            return;
        }
        
        
        const res = await usersApi.post('/users', newUser);
        console.log(res.data);
        dispatch(setUser(res.data));


        (res.status === 200) && router.push(`/user/${res.data._id}`);
            

       
    }

    return(
        <Layout>
            <div className='container-fluid'>
            <div className="contenedor-form">
                <h2 className="text-center">Sign in to Waves</h2>
                <form>
                  
                        {error 
                        &&
                        <div className='btn btn-danger w-100 text-center d-flex'>
                            <p>Todos los campos son obligatorios</p>
                        </div>
                        
                        }
                        <input type="text" id="nombre" placeholder="Name" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                   
                
              
                       
                        <input type="text"    id="descripcion" placeholder="Description" onChange={(ev)=>{
                            handleChange(ev)
                        }}/>
                    
       
                       
                       <select  id="categoria" placeholder="category" onChange={(ev)=>{
                            handleChange(ev)
                        }}>
                            <option value="surfing">surfing</option>
                            <option value="kitesurfing">kitesurfing</option>
                            <option value="climbing">climbing</option>
                            <option value="photography">photography</option>
                        </select> 
                      


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
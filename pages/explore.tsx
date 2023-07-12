
import usersApi from "@/apis"
import { Layout } from "@/components/layout"
import Link from 'next/link'
import { User } from "@/interfaces"
import { getUsers } from "@/utils"
import { GetStaticProps } from "next";
import { ReactNode, useEffect, useState } from "react"
import logo from '@/assets/logo.svg';
import Slider from "@/components/ui/Slider"
import Image from "next/image";
import { Input } from "@mui/material"
import { useSelector } from "react-redux";

export default function Explore (){
  
  const [users, setUsers] = useState<User[]>([])
  
  const{categoriaSelect}=useSelector((state:any)=>state.categoriaSelect);


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
      <Slider/>
      <div style={{
        margin:'0px auto 20px auto',
        width:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}>


   
 

      <input

         className="input-buscar"
         placeholder="Buscar"
         name='usuario'
         style={{
          width:'80%',
          height:'40px',
          borderRadius:'6px',
          border:'1px solid #c4c4c4',
          fontSize:'16px',
          padding:'8px',
         }}
         />
        <button
        style={{
          height:'40px',
          backgroundColor:'rgb(124, 100, 191)',
          borderRadius:'6px',
          border:'0px',
          color:'rgb(255, 255, 255)',
          fontSize:'16px',
          padding:'6px 56px',
          display:'block',
          marginLeft:'10px',
          fontWeight:'400',
          cursor:'pointer',          
                }}
        >Buscar</button>
       
      </div>

      <div className="container">
      
      
      <ul className="d-flex flex-wrap justify-content-center">
      
    
      {(categoriaSelect == 'todos') 
      && 
      users.map((user:User,i:any):ReactNode=>{
        if(categoriaSelect == ' todos'){
          
        }    
        return(
          <Link href={`/user/${user._id}`} key={i} className="card card-usuario" id="card" style={{
            textDecoration:'none',
          }}>

          <li  style={{
            listStyle:'none',
          }}>
          <div className="contendor-img">
              <Image src={user.img} alt="imagen-usuario" className="imagen-usuario" width={75} height={71}/>
          </div>

          <div className="mt-3 m-auto w-75 contenedor-text-card">
                  <h3 >{user.nombre}</h3>
                  <h5 className="mt-2"> {user.categoria}</h5>
                  <p className="mt-2">
                  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.9519 0H8.22004C5.12174 0 2.58598 2.53576 2.58598 5.63406V8.05214C1.06338 8.71945 0 10.2377 0 12.0057C0 13.7737 1.06338 15.292 2.58598 15.9593V18.3659C2.58598 21.4642 5.12174 24 8.22004 24H20.9519C24.0502 24 26.586 21.4642 26.586 18.3659V5.63406C26.586 2.53576 24.0502 0 20.9519 0Z" fill="#8FA2CC"/>
                  <path d="M20.0188 15.7828C20.765 14.7166 21.2042 13.4193 21.2042 12.0201C21.2042 8.38936 18.2609 5.44604 14.6301 5.44604C10.9994 5.44604 8.05469 8.38936 8.05469 12.0201C8.05469 15.6508 10.998 18.5941 14.6287 18.5941C15.9848 18.5941 17.2434 18.1837 18.2896 17.4805L21.0851 18.5697L20.0188 15.7828Z" fill="#C6DDF4"/>
                  <path d="M14.6302 2.78979C10.7569 2.78979 7.44336 5.17631 6.07431 8.55731H4.64211C2.74783 8.55731 1.20801 10.0986 1.20801 11.9914C1.20801 13.8843 2.74927 15.4255 4.64211 15.4255H6.05135C7.40605 18.8381 10.7354 21.2519 14.6316 21.2519C16.6163 21.2519 18.4517 20.6233 19.9571 19.5585L18.4173 18.9587C17.2936 19.5729 16.0035 19.923 14.6316 19.923C10.2676 19.923 6.7287 16.3856 6.7287 12.0201C6.7287 7.65466 10.2661 4.11723 14.6316 4.11723C18.9956 4.11723 22.5345 7.65466 22.5345 12.0201C22.5345 13.448 22.1542 14.7855 21.4926 15.9407L22.0796 17.4719C23.2004 15.9436 23.8633 14.0593 23.8633 12.0201C23.8605 6.92278 19.7275 2.78979 14.6302 2.78979ZM4.64068 14.0579L4.57323 14.0593C3.46393 14.0235 2.57132 13.1093 2.57132 11.9914C2.57132 10.8807 3.45245 9.97085 4.55314 9.92493H5.64092C5.4845 10.5994 5.39839 11.2997 5.39839 12.0216C5.39839 12.7219 5.47876 13.4035 5.62657 14.0593H4.64068V14.0579Z" fill="white"/>
                  </svg>
                     X {user.donaciones} recibidos</p>
          </div>
       
          </li>
          </Link>
        )
      })}
      {(categoriaSelect !== 'todos') && users.map((user:User,i:any):ReactNode=>{
        if(user.categoria == categoriaSelect){
          return(
            <Link href={`/user/${user._id}`} key={i} className="card card-usuario" id="card" style={{
              textDecoration:'none',
            }}>
  
            <li  style={{
              listStyle:'none',
            }}>
            <div className="contendor-img">
                <Image src={user.img} alt="imagen-usuario" className="imagen-usuario" width={75} height={71}/>
            </div>
  
            <div className="mt-3 m-auto w-75 contenedor-text-card">
                    <h3 >{user.nombre}</h3>
                    <h5 className="mt-2"> {user.categoria}</h5>
                    <p className="mt-2">
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9519 0H8.22004C5.12174 0 2.58598 2.53576 2.58598 5.63406V8.05214C1.06338 8.71945 0 10.2377 0 12.0057C0 13.7737 1.06338 15.292 2.58598 15.9593V18.3659C2.58598 21.4642 5.12174 24 8.22004 24H20.9519C24.0502 24 26.586 21.4642 26.586 18.3659V5.63406C26.586 2.53576 24.0502 0 20.9519 0Z" fill="#8FA2CC"/>
                    <path d="M20.0188 15.7828C20.765 14.7166 21.2042 13.4193 21.2042 12.0201C21.2042 8.38936 18.2609 5.44604 14.6301 5.44604C10.9994 5.44604 8.05469 8.38936 8.05469 12.0201C8.05469 15.6508 10.998 18.5941 14.6287 18.5941C15.9848 18.5941 17.2434 18.1837 18.2896 17.4805L21.0851 18.5697L20.0188 15.7828Z" fill="#C6DDF4"/>
                    <path d="M14.6302 2.78979C10.7569 2.78979 7.44336 5.17631 6.07431 8.55731H4.64211C2.74783 8.55731 1.20801 10.0986 1.20801 11.9914C1.20801 13.8843 2.74927 15.4255 4.64211 15.4255H6.05135C7.40605 18.8381 10.7354 21.2519 14.6316 21.2519C16.6163 21.2519 18.4517 20.6233 19.9571 19.5585L18.4173 18.9587C17.2936 19.5729 16.0035 19.923 14.6316 19.923C10.2676 19.923 6.7287 16.3856 6.7287 12.0201C6.7287 7.65466 10.2661 4.11723 14.6316 4.11723C18.9956 4.11723 22.5345 7.65466 22.5345 12.0201C22.5345 13.448 22.1542 14.7855 21.4926 15.9407L22.0796 17.4719C23.2004 15.9436 23.8633 14.0593 23.8633 12.0201C23.8605 6.92278 19.7275 2.78979 14.6302 2.78979ZM4.64068 14.0579L4.57323 14.0593C3.46393 14.0235 2.57132 13.1093 2.57132 11.9914C2.57132 10.8807 3.45245 9.97085 4.55314 9.92493H5.64092C5.4845 10.5994 5.39839 11.2997 5.39839 12.0216C5.39839 12.7219 5.47876 13.4035 5.62657 14.0593H4.64068V14.0579Z" fill="white"/>
                    </svg>
                       X {user.donaciones} recibidos</p>
            </div>
         
            </li>
            </Link>
          )
        }
      })}
      
      
      
      </ul>
      
      
      </div>
     
    </Layout>
  )
}



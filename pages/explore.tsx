
import usersApi from "@/apis"
import { Layout } from "@/components/layout"
import Link from 'next/link'
import { User } from "@/interfaces"
import { getUsers } from "@/utils"
import { GetStaticProps } from "next";
import { ReactNode, useEffect, useState } from "react"
import logo from '@/assets/waves.svg';
import Slider from "@/components/ui/Slider"
import Image from "next/image";
import { Input } from "@mui/material"
import { useSelector } from "react-redux";
import { SetStateAction } from "react";
import{useQuery} from 'react-query';
import Skeleton from "react-loading-skeleton"
import { set } from "mongoose"
import userDefault from '@/assets/user.svg'

export default function Explore (){
  
  const [data,setData]=useState<User[]>([]);
  const[isLoading,setIsLoading]=useState(false);
  const [busqueda,setBusqueda]=useState('');
  const[userBusqueda,setUserBusqueda]=useState<User>();
  const{categoriaSelect}=useSelector((state:any)=>state.categoriaSelect);
  // const {data,isLoading} = useQuery('users',()=>getUsers());
  
  const handleBusqueda = ()=>{
      data.filter((user:User)=>{
        if(user.nombre.toLowerCase().includes(busqueda.toLowerCase())){
        
          return user
        }
      })
  }
 

  useEffect(()=>{
    setIsLoading(true);
    getUsers()
      
      .then((res:SetStateAction<User[]>)=>{
        setIsLoading(false);
        setData(res)
        console.log(data)
      })
      .catch((err:any)=>{
        console.log(err)
      })
      
  },[])

  if(isLoading){
    return(
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
            backgroundColor:'#4d648d',
            borderRadius:'6px',
            border:'0px',
            color:'white',
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
        
      
       
       
            <Link href="#" className="card card-usuario">
  
            <li  style={{
              listStyle:'none',
            }}>
            <div className="contendor-img">
            <Skeleton/>
            </div>
  
            <div className="mt-3 m-auto w-75 contenedor-text-card">
                    <Skeleton/>
            </div>
         
            </li>
            </Link>
          
              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>


              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>


              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>

              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>
              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>
              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>
              <Link href="#" className="card card-usuario">
              
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
              <Skeleton/>
              </div>

              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <Skeleton/>
              </div>

              </li>
              </Link>


      
        
        
        
        </ul>
        
        
        </div>
       
      </Layout>
    )
  }else{

    return (
      <Layout>
        <Slider/>
        
        
        <div style={{
          margin:'0px auto 20px auto',
          width:'50%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        
        }} className="contenedor-input-busqueda">
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
           onChange={(e)=>setBusqueda(e.target.value)}
           />
          <button
          style={{
            backgroundColor:'#4d648d',
            borderRadius:'6px',
            border:'0px',
            color:'white',
            fontSize:'16px',
            display:'block',
            marginLeft:'10px',
            fontWeight:'400',
            cursor:'pointer',          
                  }}
            onClick={()=>{
            handleBusqueda();
             
          }}
          >Buscar</button>
         
        </div>
  
        <div className="container ">
        
        
        <ul className="d-flex flex-wrap justify-content-center">
        
      
        {(categoriaSelect == 'todos') 
        && 
        data.map((user:User,i:any):ReactNode=>{
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
                <Image src={user.img || userDefault} alt="imagen-usuario" className="imagen-usuario" width={75} height={71}/>
            </div>
  
            <div className="mt-3 m-auto w-75 contenedor-text-card">
                    <h3 >{user.nombre}</h3>
                    <h5 className="mt-2"> {user.categoria}</h5>
                    <p className="mt-2">
                        <Image className="icono-donaciones" src={logo} alt="logo" width={25} height={25}/>
                     X {user.donaciones} recibidos</p>
                      
            </div>
         
            </li>
            </Link>
          )
        })}
        {(categoriaSelect !== 'todos') && data.map((user:User,i:any):ReactNode=>{
          if(user.categoria == categoriaSelect){
            return(
              <Link href={`/user/${user._id}`} key={i} className="card card-usuario" id="card" style={{
                textDecoration:'none',
              }}>
    
              <li  style={{
                listStyle:'none',
              }}>
              <div className="contendor-img">
                  <Image src={ user.img } alt="imagen-usuario" className="imagen-usuario" width={75} height={71}/>
              </div>
    
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{user.nombre}</h3>
                      <h5 className="mt-2"> {user.categoria}</h5>
                      <p className="mt-2">
                        <Image className="icono-donaciones" src={logo} alt="logo" width={25} height={25}/>
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
  
  
}



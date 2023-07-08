import React,{useState,useContext} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg'
import { ThemeIcons } from './ThemeIcons';





export const NavBar = () => {
  

    return (
        <div className="container contenedor-header d-flex justify-content-around m-auto">
           
            <div className="d-flex logo p-2 mt-1" style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:'10px 20px',
                marginTop:'40px',
            }}>
                <Link href="/" style={{
                    marginTop:'-10px'
                }}>
                <Image src={logo} alt="logo" />
                </Link>
                <h3 className="titulo " style={{
                    fontWeight:"600",
                    color:'#2e62bb',
                    marginLeft:'10px',
                }} >waves4gifts</h3>   
            </div>
          
            <nav className='mt-2 p-1 open' style={{
               
                marginTop:'20px',
                padding:'10px 20px',
            }}>
                <ul style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                {/* <li className="btn mt-2" onClick={()=>{
                    
                }}><ThemeIcons/></li> */}
                <li className="btn" style={{
                    padding:'10px 20px',
                }}><Link className="links explorar" href="/explore">Explorar</Link></li>
                <li className="btn ingresar"><Link className=" links ingresar" href="/auth" id="ingresar-header" style={{
                    padding:"10px 20px",
                    borderRadius:'5px',
                }}>Ingresar</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}


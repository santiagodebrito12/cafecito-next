import React,{useContext,useState,useEffect} from 'react'
import Link from 'next/link'
import arte from '@/assets/categorias/arte.svg'
import blog from '@/assets/categorias/blog.svg'
import ciencia from '@/assets/categorias/ciencia.svg'
import comic from '@/assets/categorias/comic.svg'
import comida from '@/assets/categorias/comida.svg'
import deportes from '@/assets/categorias/deportes.svg'
import hardware from '@/assets/categorias/hardware.svg'
import Image from 'next/image'



const arr =  [
    {
        categoria:"arte",
        icono: arte
    },
    {
        categoria:"blog",
        icono: blog
    },
    {
        categoria:"ciencia",
        icono: ciencia
    },
    {
        categoria:"comic",
        icono: comic
    },
    {
        categoria:"comida",
        icono: comida
    },
    {
        categoria:"deportes",
        icono: deportes
    },
    {
        categoria:"hardware",
        icono: hardware
    },
]




const Slider = () => {
    
  


    

    return (
        <div className="container">
            
           
            <div className="slider">
                { <ul className=" lista-categorias flex-wrap">
                    
                    {arr.map((categoria,i)=>{
                        
    
                        return(
                            <Link className="link card-categoria" href="#" key={i} >
                            <li className="d-flex">
                                <i className="far fa-star fa-2x star"></i>
                                
                                <Image
                                src={categoria.icono}
                                width={60}
                                height={60}
                                alt="Logo"
                                />
                                <p className="text-center text-uppercase">{categoria.categoria}</p>
                            </li>
                            </Link>

                        )
                    })}
                        
                     </ul>
                    }
                    
               
            </div>
          
             
        </div>
    )
}

export default Slider;

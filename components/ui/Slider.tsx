import React,{useContext,useState,useEffect} from 'react'
import Link from 'next/link'
import surfing from '@/assets/categorias/surfing.svg'
import kitesurfing from '@/assets/categorias/kitesurfing.svg'
import photography from '@/assets/categorias/camera.svg'
import climbing from '@/assets/categorias/climbing.svg'

import Image from 'next/image'
import { getUsers } from '@/utils'
import { obtenerCategorias } from '@/utils/obtenerCategorias'
import { useSelector,useDispatch } from 'react-redux'
import { setCategoria } from '@/store/slices/categorias'

const arr =  [
    {
        categoria:"surfing",
        icono: surfing
    },
    {
        categoria:"photography",	
        icono: photography
    },
    {
        categoria:"kitesurfing",
        icono: kitesurfing
    },
    {
        categoria:"climbing",
        icono: climbing
    },
   
]




const Slider = () => {
    const [categorias, setCategorias] = useState([])

    const{categoriaSelect}=useSelector((state:any)=>state.categoriaSelect)
    const dispatch = useDispatch();

    useEffect(() => {
            
        getUsers()
            .then((res)=>{
               setCategorias(obtenerCategorias(res))
               
            })

            .catch((err)=>{
                console.log(err)
            })

    },[])

    
    return (
        <div className="container">
            
           
            <div className="slider">
                { <ul className=" lista-categorias flex-wrap">
                    {categorias.map((categoria,i)=>{
                        return(
                            <Link className="link card-categoria" href="#" key={i} onClick={()=>{
                                dispatch(setCategoria(categoria))
                            }} >
                            <li className="d-flex">
                                <i className="far fa-star fa-2x star"></i>
                                {arr.map((c,i)=>{
                                   
                                     if(categoria === c.categoria) {
                                        return(
                                            <Image src={c.icono} alt="icono" width={30} height={30} key={i} className="iconos"/>
                                        )
                                     }
                                })}

                                <p className="text-center text-uppercase text-categoria">{categoria}</p>
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

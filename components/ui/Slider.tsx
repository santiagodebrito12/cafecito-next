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
import { getUsers } from '@/utils'
import { obtenerCategorias } from '@/utils/obtenerCategorias'
import { useSelector,useDispatch } from 'react-redux'
import { setCategoria } from '@/store/slices/categorias'

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
        categoria:"streaming",
        icono: blog
    },
    {
        categoria:"arquitectura",
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
                                            <Image src={c.icono} alt="icono" width={50} height={50} key={i}/>
                                        )
                                     }
                                })}

                                <p className="text-center text-uppercase">{categoria}</p>
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

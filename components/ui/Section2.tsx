import Image from 'next/image';
import usuario1 from '@/assets/usuarios/natasha.jpg';
import usuario2 from '@/assets/usuarios/italo.jpg';
import usuario3 from '@/assets/usuarios/bruno-nunez.jpg';


const comentarios = [
    {
        nombre: 'Natasha Niebieskikwiat',
        img:usuario1,
        categoria:'kitesurfing',
        comentario:'Waves is an amazing platform: it brings you closer, simplifies and amplifies. Personally, as a surfer, it gave me the greatest possible joy: allowing me to share my passion for surfing and content creation.',
    },
    {
        nombre: 'Italo Ferreira',
        img:usuario2,
        categoria:'surfing',
        comentario:'Waves allows you to support your projects in an intuitively simple way: Building a rhetorical bridge between inviting someone for a drink as a thank you and a digital application. It seems difficult for something analog to resonate with digital, but Waves achieves it.',
    },
    {
    nombre: 'Bruno Nunez',
    img:usuario3,
    categoria:'climbing',
    comentario:'Waves is a platform that helps many extreme athletes. I found it as a way to connect with my followers where they can help me continue creating with their contribution.',
    }
]

export const Section2 = () => {
  
                          
    return (
        <div className=" container contenedor-seccion2 ">
            <h2 className="text-center">¿What they are saying about Waves?</h2>
         
            <div className="contenedor-comentarios">
                <ul >
                   
                   {comentarios.map((usuario,i)=>{
                       return(
                        <li className="card mt-4" key={i}>
                        <div className="header-card d-flex justify-content-between align-items-center mt-2">
                            <Image src={usuario.img} alt="img-usuario" className="imagen-usuario"/>
                            <div className="header-text w-50">
                              <h4>{usuario.nombre}</h4>
                              <p>{usuario.categoria}</p>
                            </div>
                        </div>
                        <div className="mt-5 contenedor-comentario">

                        <p>{usuario.comentario}</p>
                        </div>
                    </li>
                       )
                   })}
                   
                    
                    
                </ul>
            </div>
        
        
        </div>
    )
    }




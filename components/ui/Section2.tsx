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
        comentario:'Waves permite sustentar tus proyectos de una manera intuitivamente sencilla: Tendiendo un puente retórico entre invitar a alguien a tomar algo en forma de agradecimiento y una aplicación digital. Parece difícil que algo analógico tenga resonancia en lo digital, pero Waves lo logra.',
    },
    {
    nombre: 'Bruno Nunez',
    img:usuario3,
    categoria:'climbing',
    comentario:'Waves es una plataforma que ayuda muchos atletas extremos. Yo lo encontré como una forma de conectarme con mis seguidores donde ellos pueden ayudarme a seguir creando con su aporte.',
    }
]

export const Section2 = () => {
  
                          
    return (
        <div className=" container contenedor-seccion2 ">
            <h2 className="text-center">¿Que dicen de Cafecito?</h2>
         
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




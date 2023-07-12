import Image from 'next/image'
import img from '../../assets/foto-seccion.svg'

export const Section1 = () => {
  return (
    <div className="container contenedor-seccion p-2">
            <h2 className="text-center titulo-seccion mt-3">¿Cómo funciona Cafecito?</h2>
            <div className="contenedor-explicacion w-100 mt-4">
                <Image src={img} alt="imagen-seccion" className="imagen-seccion"/>
                <div className=" contenedor-parrafos">
                    <div>
                        <h3>Creá tu cuenta</h3>
                        <p>Solo te llevará 60 segundos personalizar tu perfil y comenzar a compartir lo que hacés.</p>
                    </div>
                    <div  className="mt-3">
                        <h3>Creá contenido</h3>
                        <p>Contale a tu comunidad sobre Cafecito y tus objetivos, publicalo en redes sociales así más personas podrán ver tu perfil</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

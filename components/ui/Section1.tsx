import Image from 'next/image'
import img from '../../assets/foto-seccion.svg'

export const Section1 = () => {
  return (
    <div className="container contenedor-seccion p-2">
            <h2 className="text-center titulo-seccion ">¿How waves works?</h2>
            <div className="contenedor-explicacion w-100 mt-4">
                <Image src={img} alt="imagen-seccion" className="imagen-seccion"/>
                <div className=" contenedor-parrafos">
                    <div>
                        <h3>Create your profile</h3>
                        <p>It will only take you 60 seconds to customize your profile and start sharing what you do.</p>
                    </div>
                    <div  className="mt-3">
                        <h3>Show your content</h3>
                        <p>Tell your community about Waves and your goals, post it on social networks so more people can see your profile</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

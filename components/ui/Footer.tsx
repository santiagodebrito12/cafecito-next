
import twiter from '@/assets/twiter.svg';
import insta from '@/assets/insta.svg'
import Image from 'next/image';


export const Footer = () => {
  return (
   
   <footer className='footer'>
    <div className="contenedor-derechos">
        <p>© 2021 Cafecito.</p>
        <div>
            <ul className="lista-derechos">
            <li><a href="#"> Preguntas Frecuentes</a></li>
            <li><a href="#">Terminos y politica de privacidad</a></li>
            </ul>
        </div>
    </div>
    <div className="contenedor-redes">
        <ul className="d-flex lista-redes justify-content-around">
            <li><a href="#"><Image src={twiter} alt="imagen-twitter"/></a></li>
            <li><a href="#"><Image src={insta} alt="imagen-insta"/></a></li>

        </ul>
    </div>
    </footer>
  )
}

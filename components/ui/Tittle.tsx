import Link from "next/link"

export const Tittle = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center contenedor-main">
     
        <h1 >Potencia tus ideas!</h1>
        <p >Cafecito es una plataforma de crowdfunding que busca unir a creadores de contenido, ONGs o proyectos con gente que quiera aportar a lo que hacen.</p>
        <div> 
       
            <Link href="/auth" className="btn-crear-cuenta" >
                Crear cuenta
            </Link>
        </div>
    </div>
  )
}

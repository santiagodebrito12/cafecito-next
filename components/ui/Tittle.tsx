import Link from "next/link"

export const Tittle = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center contenedor-main ">
     
        <h1 >Boost your passion!</h1>
        <p >Waves is a crowdfunding platform that seeks to promote the career of extreme athletes.</p>
        <div> 
       
            <Link href="/auth" className="btn-crear-cuenta" >
                Sing Up
            </Link>
        </div>
    </div>
  )
}

import { IUser } from "@/models"
import Image from "next/image"
import userDefault from "@/assets/user.svg"
interface UserDetailProps {
    user:IUser,
    setdetailState:Function,
}

export const DetailHeader = ({user,setdetailState}:UserDetailProps) => {
 
  return (
    <div className="row">
        <div className="col-4 m-auto contenedor-detalles-nombre">
        <Image src={(user.img) ? user.img : userDefault} className="img-usuario" alt="imagen-usuario" width={100} height={100}/>
        <h1 className="text-center mt-2">{user.nombre}</h1>
        <p className="text-center text-uppercase">{user.categoria}</p>
        <div className="d-flex justify-content-around w-50">
        <h3 style={{
          marginLeft:"10px",
          cursor:'pointer'
        }} onClick={()=>{
          setdetailState('perfil')
        }}>Profile</h3>
        {/* <h3 style={{
          cursor:'pointer'
        }} onClick={()=>{
          setdetailState('contendio')
        }}>Contenido</h3> */}
        </div>
    
        </div>
    </div>
  )
}
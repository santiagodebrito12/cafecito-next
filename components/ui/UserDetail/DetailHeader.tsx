import { IUser } from "@/models"
import Image from "next/image"

interface UserDetailProps {
    user:IUser
}

export const DetailHeader = ({user}:UserDetailProps) => {
  return (
    <div className="row">
        <div className="col-4 m-auto contenedor-detalles-nombre">
        <Image src={user.img} className="img-usuario" alt="imagen-usuario" width={100} height={100}/>
        <h1 className="text-center mt-2">{user.nombre}</h1>
        <p className="text-center text-uppercase">{user.categoria}</p>
        <h3>Perfil</h3>
        </div>
    </div>
  )
}
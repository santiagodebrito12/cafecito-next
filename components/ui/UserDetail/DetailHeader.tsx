import { IUser } from "@/models"
import Image from "next/image"
import userDefault from "@/assets/user.svg"
import EditIcon from '@mui/icons-material/Edit';
interface UserDetailProps {
    user:IUser,
    setdetailState:Function,
    userLogin:IUser,
}

export const DetailHeader = ({user,setdetailState,userLogin}:UserDetailProps) => {
  
  return (
    <div className="row">
        <div className="col-4 m-auto contenedor-detalles-nombre">
        <div className="d-flex position-relative">
        <Image src={(user.img) ? user.img : userDefault} className="img-usuario" alt="imagen-usuario" width={100} height={100}/>
        {userLogin !== null ? <EditIcon className="edit-icon "/> : null}
        
        </div>
      
        <h1 className="text-center mt-2">{user.nombre}</h1>
        <p className="text-center text-uppercase">{user.categoria}</p>
        <div className="d-flex justify-content-around w-50 mb-3">
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
import { IUser } from "@/models"

import logo from '@/assets/waves.svg';

import twiter from '@/assets/twiter.svg';
import insta from '@/assets/insta.svg';
import facebook from '@/assets/facebook.svg';
import youtube from '@/assets/youtube.svg';
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
interface UserDetailProps {
    user:IUser,
    userLogin:IUser,
}

export const DescriptionDetail = ({user,userLogin}:UserDetailProps) => {
  
  return (
 
    <div className="contenedor-descripcion position-relative">
    {(userLogin !== null && userLogin === user) ? <EditIcon className="edit-icon "/> : null}
    <h1 className=" descripcion">Description: </h1>
    <p>{user.descripcion}</p>

    <div className="list-redes">
    <a href="#" className="redes"><Image src={twiter} alt="twiter" width={20} height={20}/></a>
    <a href="#" className="redes"><Image src={insta} alt="instagram" width={20} height={20}/></a>
    <a href="#" className="redes"><Image src={facebook} alt="facebook" width={20} height={20}/></a>
    <a href="#" className="redes"><Image src={youtube} alt="youtube" width={20} height={20}/></a>
    </div>

    <div className="mt-5">
    <p><Image src={logo} alt="logo" width={20} height={20}/> x {user.donaciones} recibidos</p>
    </div>
</div>
  )
}

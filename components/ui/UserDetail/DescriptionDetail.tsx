import { IUser } from "@/models"

import logo from '@/assets/waves.svg';

import twiter from '@/assets/twiter.svg';
import insta from '@/assets/insta.svg';
import facebook from '@/assets/facebook.svg';
import youtube from '@/assets/youtube.svg';
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import axios from "axios";
interface UserDetailProps {
    user:IUser,
    userLogin:IUser,
}

export const DescriptionDetail = ({user,userLogin}:UserDetailProps) => {
  
  const[edit,setEdit]=useState(false);
  const[descripcion,setDescripcion]=useState(user.descripcion);
  
  const updateUser=async()=>{
    const res = await axios.patch(`http://localhost:3000/api/users/${user._id}`,{
      descripcion:descripcion});
      console.log(res);
  } 

  return (
 
    <div className="contenedor-descripcion position-relative">
     {(userLogin !== null) &&
        <div className="contenedor-icono" id="icono-descripcion" onClick={()=>{
          setEdit(!edit);
        }}>
          <EditIcon className="edit-icon" /> 
        </div>
      }
    <h1 className=" descripcion">Description: </h1>
    
    {edit ? <textarea className="form-control w-75" rows={2} placeholder={user.descripcion} onChange={(e)=>{
      setDescripcion(e.target.value)
    }} /> :  <p>{user.descripcion}</p>}
    {edit && <button className="btn btn-sign-in mt-3 button-save" onClick={()=>{
      updateUser();
      
    }}>Save</button>}

    <div className="list-redes m-3">
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

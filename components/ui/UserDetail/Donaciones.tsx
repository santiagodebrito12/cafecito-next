import { IUser } from "@/models"

import logo from '@/assets/waves.svg';
import Image from "next/image";

interface UserDetailProps {
    user:IUser
}


export const Donaciones = ({user}:UserDetailProps) => {
  return (
    <div className="contenedor-donacion ">
       <div>
            
            <h1 className=" descripcion mt-3">Do you want to share a wave? </h1>
            <div className="w-50 d-flex ">
            <div className="m-2">
              
               <p><Image src={logo} alt="logo" width={20} height={20}/> X </p> 
             </div>
            <div className="d-flex justify-content-around  contendor-botones m-2">
            <button onClick={()=>{
               
            }}>-</button>
            <p className="mt-1">1</p>
            <button onClick={()=>{
                
            }}>+</button>
            </div>                       
           
            
            </div>
    
            <div className="contenedor-form mb-4" onSubmit={(e)=>{
               
            }}>
                <form>
                <input type="text" placeholder="Name (opcional)" className="w-100" name="nombre"/>
                <input type="number" placeholder="Contact "className="w-100" name="contacto"  />
                <textarea placeholder="Message (opcional) "className="w-100" name="mensaje"  ></textarea>
                <button className="w-50 d-block m-auto" type="submit"
                >Gift me a wave!</button>
                </form>
            </div>
            </div>
    </div>
  )
}

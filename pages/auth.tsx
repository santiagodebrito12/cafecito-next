import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Auth() {
    return(
        <Layout>
            <div className="container w-75  contenedor-authentificacion ">
            <div>
            <h2 className="text-center mb-3">Registrate en Cafecito!</h2>
            <hr/>
            </div>
             <Link href="/newuser" className="btn ingresar btn-nuevo-usuario p-2 w-50" id="btn-nuevo-usuario" onClick={()=>{
             
            }}>Nuevo Usuario </Link>
            
{/* 
            {form 
            &&
            <Form/>
            } */}

            <button  className="btn ingresar btn-nuevo-usuario p-2 w-50"  id="btn-nuevo-usuario">Ingresar</button>
           
       
        </div>
        </Layout>
       
    )
}
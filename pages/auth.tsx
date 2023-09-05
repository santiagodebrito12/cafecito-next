import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Auth() {
    return(
        <Layout>
            <div className="container w-70  contenedor-authentificacion ">
            <div>
            <h2 className="text-center mb-3">Be part of Waves!</h2>
            <hr/>
            </div>
             <Link href="/newuser" className="btn ingresar btn-nuevo-usuario p-2 w-25" id="btn-nuevo-usuario" onClick={()=>{
             
            }}>Sign in </Link>
            
{/* 
            {form 
            &&
            <Form/>
            } */}

            <Link  className="btn ingresar btn-nuevo-usuario p-2 w-25"  id="btn-nuevo-usuario" href="/login" >Login</Link>
           
       
        </div>
        </Layout>
       
    )
}
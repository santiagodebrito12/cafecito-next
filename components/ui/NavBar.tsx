import React,{useState,useContext} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/waves.svg'
import { useSelector } from 'react-redux';

import MenuIcon from '@mui/icons-material/Menu';



export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const{userLogin}=useSelector((state:any)=>state.loginState);

    const handleOpen  = () =>{
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
    }

    return (
        <div className='contenedor-navbar'>

        <div className="container-sm container-md container contenedor-header d-flex justify-content-between m-auto align-items-center">
          
            <div className="d-flex logo p-2 mt-1 contenedor-logo" >
                <Link href="/" >
                <Image src={logo} alt="logo" className='logo'/>
                </Link>
            
                <h3 className="titulo "  >Waves</h3>   
            </div>
           
        
        
           
            <nav className={open ? 'mt-2 p-1 open' : 'mt-2 pt-1 close'} 
            >
              
                <ul >
                {/* <li className="btn mt-2" onClick={()=>{
                    setTheme();
                }}><ThemeIcon/></li> */}
                <li className="btn" style={{
                    padding:'10px 20px',
                }}><Link className="links explorar" href="/explore">Explore</Link></li>
               
              
                   {(userLogin !== null)
                    ? <div className='contenedor-welcome'><h3 className='welcome-title'>Hi {userLogin.nombre}!</h3> </div> 
                    :   <li className="btn ingresar"><Link className=" links ingresar" href="/auth" id="ingresar-header" style={{
                        padding:"10px 20px",
                        borderRadius:'5px',
                    }}>Login</Link></li>  
                    }
                    
                </ul>
                </nav>
            
            <MenuIcon className="menu-icon" onClick={handleOpen}/>
           

            
        </div>
        </div>
    )
}


import { Input, Button } from "@mui/material"


export const Tittle = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 style={{
            fontSize:'45px',
            fontWeight:'550',
            color:'#2e62bb',
            textAlign:'center',
            
        }}>Potencia tus ideas!</h1>
        <p style={{
            fontSize:'20px',
            marginTop:'20px auto',
            width:'70%',
            textAlign:'center',
            margin:'12px',
            color:'#fff',
        }}>Cafecito es una plataforma de crowdfunding que busca unir a creadores de contenido, ONGs o proyectos con gente que quiera aportar a lo que hacen.</p>
        <div style={{
            display:'flex',
            width:'60%',
            justifyContent:'space-around',
            marginTop:'20px',
        }}> 
            <input placeholder="cafecito/app" style={{
                borderRadius:'6px',
                border:'1px solid #c4c4c4',
                width:'60%',
                fontSize:'16px',
                padding:'8px 10px 8px 110px',
                boxSizing:'border-box',
                height:'40px',
            }}/>
            <button className="btn" style={{
                backgroundColor:'#2e62bb',
                borderRadius:'6px',
                border:0,
                color:'#fff',
                fontSize:'16px',
                padding: '6px 56px',
                display:'block',
                fontWeight:'400',
                height:'40px',
                marginLeft:'12px',
                width:'40%',

            }}>
                Crear cuenta
            </button>
        </div>
    </div>
  )
}

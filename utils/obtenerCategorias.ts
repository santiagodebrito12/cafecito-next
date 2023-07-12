type Users = [];
type Categorias = string[];
export const obtenerCategorias:Function = (res:Users) => {
    const categorias:Categorias = [];
        res.map((item:any)=>{
            if(!categorias.includes(item.categoria)){
                categorias.push(item.categoria);
            }
        })
   
        
        return categorias;
    };
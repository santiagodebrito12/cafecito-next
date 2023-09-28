import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import {db} from '@/database';
import { User } from '@/models';
import { IUser } from '@/models';
import uploadToCloudinary from '../../../services/cloudinary.js';
interface ILogin{
    email:string,
    password:string
}
type Data =
|{  name: string}
|{users:IUser[]}
|{login:ILogin[]}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    switch(req.method){
        
        case 'GET':
            return  getLogin(req,res)
        
      
       
         default:
            return res.status(400).json({ name: 'error' })
    }

}

const getLogin = async(req:NextApiRequest,res:NextApiResponse) =>{
    
    const{email,password} = req.query;
   
    await db.connect();
    const user = await User.findOne({email,password}); 
    await db.disconnect();
    console.log(user)
if(user === null){
       return res.status(404).json({message:'usuario no encontrado'})
    }
   
    res.status(200).json(user);
    
}

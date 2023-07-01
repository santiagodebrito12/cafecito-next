import type { NextApiResponse , NextApiRequest } from "next";
import mongoose from "mongoose";
import { db } from "@/database";
import { User, IUser } from "@/models";

type Data = 
|{id:number}
|{message:string}
|IUser


export default function handler(req:NextApiRequest,res:NextApiResponse){
   
    const { id } = req.query
   
    if( !mongoose.isValidObjectId(id)){
        return res.status(400).json({message:id})    
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req,res);
        // case 'PUT':
        //     return upDateEntry(req,res);
        // case 'DELETE':
        //     return deleteEntry(req,res)

        default:
            res.status(400).json({message:'Bad request'})   
    }    
   
}

const getEntry = async (req:NextApiRequest,res:NextApiResponse) =>{
    const{id} = req.query;

    await db.connect();
    
    const user = await User.findById(id);
    await db.disconnect();
    
    if(!user){
        return res.status(400).json({message:' id no encontrado '});
    }


    res.status(200).json(user);

}



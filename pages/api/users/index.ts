// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import {db} from '@/database';
import { User } from '@/models';
import { IUser } from '@/models';

type Data =
|{  name: string}
|{users:IUser[]}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    switch(req.method){
        
        case 'GET':
            return  getUsers(res)
        
        case 'POST':
            return res.status(200).json({ name: 'desde POST' })
       
         default:
            return res.status(400).json({ name: 'error' })
    }

}

const getUsers = async(res:NextApiResponse) =>{
    await db.connect();

    const users = await User.find();

    await db.disconnect();

    res.status(200).json(users)
    // res.status(200).json(process.env)
}


import mongoose, {Model,Schema} from 'mongoose';
import { User } from '@/interfaces';

export interface IUser extends User{

}


const userSchema = new Schema({
    categoria:{type: String },
    descripcion:{type:String},
    donaciones:{type:String},
    img:{type:String},
    nombre:{type:String}
});

const userModel:Model<IUser> = mongoose.models.Users || mongoose.model('Users',userSchema);



export default userModel;
import mongoose, {Model,Schema} from 'mongoose';


export interface IUser{
    categoria:"string",
    descripcion:"string",
    donaciones :"string",
    img:"string"
    nombre:"string"
}

const userSchema = new Schema({
    description:{type:String,required:true},
    img:{type:String,required:true},
    name:{type:String,required:true},
    category:{type:String,required:true},
    donations:{type:String,required:true}
});

const userModel:Model<IUser> = mongoose.models.User || mongoose.model('Users',userSchema);


export default userModel;
import mongoose, {Schema} from 'mongoose'


const monsterMash = new Schema({
    name:String,
    title:{
        type:String,
        default:"OOOOOO"
    }
})


export default mongoose.models.Monster || mongoose.model('Monster',monsterMash);

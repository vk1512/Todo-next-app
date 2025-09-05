import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    iscomplete:{
        type:Boolean,
        default:false
    }
},{
    timeStamps:true
}
)

const TodoModel=mongoose.models.todo || mongoose.model('todo',todoSchema)

export default TodoModel;
import mongoose from "mongoose"

export const ConnectDb= async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected")
    })
    await mongoose.connect('mongodb+srv://vishal:vishal123@cluster0.2ku76.mongodb.net/todo-app')
    

}
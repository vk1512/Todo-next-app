import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const { ConnectDb } = require("@/lib/config/db")


const LoadDB= async() =>{
    await ConnectDb();
}

LoadDB();

export async function GET(request) {
    const todos=await TodoModel.find({})
    return NextResponse.json({todos:todos})
    
} 

export async function POST(request){
    const{title,description} =await request.json()

    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})
}

export async function DELETE(request){
    const mongoid=await request.nextUrl.searchParams.get('mongoid')

    await TodoModel.findByIdAndDelete(mongoid)
    return NextResponse.json({msg:"Todo deleted"})
}

export async function PUT(request){
    const mongoid=await request.nextUrl.searchParams.get('mongoid')
    
    await TodoModel.findByIdAndUpdate(mongoid,{
        $set:{
            iscomplete:true
        }
    })
    return NextResponse.json({msg:"Todo completed"})
}



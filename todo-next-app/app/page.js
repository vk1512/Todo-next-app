"use client"
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Home() {
  const [formdata, setFormdata] = useState({
    title: " ",
    description: " ",
  });


    const deleteTodo= async(id) =>{

        const response=await axios.delete('/api',{
          params:{
            mongoid:id
          }
        })
        toast.success(response.data.msg)
        fetchTodos()

    }

  const [todo, settodo] = useState([])
  const fetchTodos=async()=>{

    const response=await axios("/api")
    settodo(response.data.todos)
  }

  useEffect(() => {
    fetchTodos();
  },[])
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post('/api',formdata)
      toast.success(response.data.msg);
      setFormdata({
        title:"",
        description:""
      })
      await fetchTodos()
      
      } catch (error) {
      toast.error('Error');
    }
  };

  const onChangeHandler = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata((form) => ({ ...form, [name]: value }));
    console.log(formdata);
  };


  const updateTodo=async(id)=>{
      const response=await axios.put('/api',{},{
          params:{
            mongoid:id
          }
        })
        toast.success(response.data.msg)
        fetchTodos()
  }
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex gap-3 items-start flex-col w-[80%] max-w-[600px] mx-auto my-24 ">
        <input
          onChange={onChangeHandler}
          value={formdata.title}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="border-1 py-2 px-3 w-full rounded-lg "/>
        <textarea
          onChange={onChangeHandler}
          value={formdata.description}
          placeholder="Enter Description"
          name="description"
          className=" border-1 py-2 px-3 w-full rounded-lg"
        />
        <button type="submit" className="bg-pink-400 px-8 font-semibold  py-3 rounded-sm">
          Add Todo
        </button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {
            todo.map((item,index)=>(
              <Todo key={index} id={index} title={item.title} description={item.description} iscomplete={item.iscomplete} mongoid={item._id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))
          }
          </tbody>
        </table>
      </div>
    </>
  );
}

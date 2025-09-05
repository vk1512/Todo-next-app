import React from 'react'

const Todo = ({title,description,iscomplete,id,mongoid,deleteTodo,updateTodo}) => {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {id+1}
                          </th>
                          <td className="px-6 py-4">
                              {title}
                          </td>
                          <td className="px-6 py-4">
                              {description}
                          </td>
                          <td className="px-6 py-4">
                              {iscomplete ? "completed":"pending"}
                          </td>
                          <td className="px-6 py-4 flex gap-2">
                              <button onClick={()=>deleteTodo(mongoid)} type="submit" className='py-2 px-3 bg-red-500 text-white rounded-sm'>Delete</button>
                              {iscomplete?" ":<button onClick={()=> updateTodo(mongoid)} type="submit" className='py-2 px-3 bg-green-500 text-white rounded-sm'>Done</button>}
                          </td>

                         
                      </tr>
                      
  )
}

export default Todo
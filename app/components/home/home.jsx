import Link from "@/node_modules/next/link"
import Navbar from "@/app/navbar"


let tasks = [{toDo: "wash dishes", completed:true},
    {toDo: "work out", completed:false},
    {toDo: "walk the dog", completed:false},
    {toDo: "go get groceries", completed:false}
]
    
    let renderTasks = tasks.map((task)=>{
        return(
            task.completed ? <h1 className="taskDone">{task.toDo}</h1> : <h1 className="task">{task.toDo}</h1>
        )
    })
    
    // console.log(tasks)

export default function home(){
    return(
        <div>
        <Navbar/>
        <h1 className="flex items-center justify-center">To-List WHOOOOOO</h1>
        <div className="flex items-center justify-center">
            <br/>
          <input type="text" name="to-do" className="border-2 border-gray-800 p-2 font-bold" placeholder="todays tasks..."/>
        </div>
        {renderTasks}
        <br/>
        <Link href="/signup">sign up</Link>
        </div>
    )
}
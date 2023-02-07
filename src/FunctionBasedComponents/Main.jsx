import * as React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Card from 'react-bootstrap/Card';
// storing all the todo's in the local storage so even after refreshing the page you will get all the todos
const getLocalItems = () => {
    let list = localStorage.getItem("list")
    if (list) {
        return JSON.parse(localStorage.getItem("list"))
    }
    else {
        return []
    }
}

const Main = () => {
    // before setting item to the localstorage
    // const [todoList, settodoList] = React.useState([])
    const [todoList, settodoList] = React.useState(getLocalItems())
    const addcallback = (taskName) => {
        const uniqueId = Date.now()
        settodoList([...todoList, { id: uniqueId, name: taskName }])
    }
    const editCallback = (id, name) => {
        const newTaskName = prompt("Update your task... ", name)
        const allTasks = Object.assign([], todoList)
        const position = allTasks.findIndex(el => el.id === id)
        allTasks[position] = {
            id: id,
            name: newTaskName
        };
        settodoList(allTasks)
    }
    const deleteCallback = (id) => {
        const allTasks = Object.assign([], todoList)
        const position = allTasks.findIndex(el => el.id === id)
        // removing an element from a position
        allTasks.splice(position, 1)
        settodoList(allTasks)
    }
    // setting  list to local storage
    React.useEffect(() => {
        localStorage.setItem("list", JSON.stringify(todoList))
    }, [todoList])

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className="col-md-8 border border-dark rounded">
                    <Card>
                        <Card.Body>
                            <h1 className='display-5'>Your ToDo's</h1>
                            <AddTodo callback={addcallback} />
                            <TodoList onEdit={editCallback} onDelete={deleteCallback} tasks={todoList} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Main
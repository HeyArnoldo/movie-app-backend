const express = require("express")
const movieRouter = express.Router()
const movies = require("../movies")
//Get All Movies
movieRouter.get("/", (req, res) => res.json(movies))

//Get A Single Movie
movieRouter.get("/:id", (request , response) => {
    const id = request.params.id
    const movie = movies.find(movie => movie.id === id)
    if (movie) {
        response.send(movie)
    }else {
        response.status(404).json({
            error : "Not Found"
        }).end()
    }
})

/* //Create New Todo
movieRouter.post("/" , (request , response) => {
    const todo = request.body

    if (!todo || !todo.text){
        return response.status(400).json({
            error: "todo.text is missing! :("
        })
    }

    const newTodo = {
        id: uuidv4(),
        text: todo.text,
        completed: todo.completed || false
    }

    todos.push(newTodo)
    response.status(201).send(newTodo)
})

// Update todo
movieRouter.put("/:id", (request, response) => {
    const id = request.params.id
    todos.map(todo => {
        if (todo.id === id) {
            const isCompleted = () => {
                if(updTodo.completed === true) {
                    return true
                }else if (updTodo.completed === false){
                    return false
                }else{
                    return todo.completed
                }
            }
            const updTodo = request.body
            todo.completed = isCompleted()
            todo.text = updTodo.text || todo.text

            response.json(todo)
        }
    })
})

// Delete todo
movieRouter.delete("/:id", (request, response) => {
    const id = request.params.id
    todos.forEach((todo , index) => {
        if (todo.id === id){
            todos.splice(index,1)         
        }
    })
    response.status(200).json(todos).end()
})
 */
module.exports = movieRouter
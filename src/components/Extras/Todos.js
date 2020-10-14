






import React, { Component } from 'react'
import TodoLists from './TodoLists'

export class Todos extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
                todos: [
                    {
                        id: 1,
                        title: 'Eat Breakfast',
                        isCompleted: false
                    },
                    {
                        id: 2,
                        title: 'Meeting With Boss',
                        isCompleted: false
                    },
                    {
                        id: 3,
                        title: 'take out trash',
                        isCompleted: false
                    }
            ]
        }
    }
    
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id){
                    todo.isCompleted = !todo.isCompleted
                }

                return todo;
            })
        })
        
    } 
    deleteItem = (id)=>{
        this.setState({
            todos: [...this.state.todos.filter((todo) => {
                return todo.id !== id
            })]
        })
    }

    render() {
        const {todos} = this.state 
        return  todos.map((todo) => {
            return (

                <TodoLists key={todo.id} todo = {todo} markComplete={this.markComplete} deleteItem ={this.deleteItem}/>
            )
        })
           
    
    }
}

export default Todos

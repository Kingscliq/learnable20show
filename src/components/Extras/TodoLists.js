// import React from 'react'

// const main={
    
//     width: '500px',
//     height: 'auto',
//     margin: 'auto',
//     marginTop: '100px',


// }
// const todoStyle={
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
// }


// const formStyle ={
//     display: 'flex',
//     justifyContent: 'space-between'
// }




// function TodoLists(props) {
//     const {todos} = props;

   
    

//   return (
      
//     <div style={main}>
//          <h1>TodoList</h1>
//         <form style={formStyle} onSubmit={(e)=>{

//             e.preventDefault()
            
//         } }>
//             <div><input type="text" placeholder="Add Todo" style={{width: '400px', display: 'inline-block', marginBottom: '20px'}}/></div>
            
//             <div><input style={{width: '100px'}} type="Submit"/></div>
//         </form>
       
//     {todos.map((todo) =>{
//     // let markComplete;
//     // if(todo.isCompleted === true){
//     //     markComplete = {
//     //         textDecoration: 'strike-through'
//     //     }
//     // }
    
//         return (
        
//         <div style={todoStyle} key={todo.id}>
//             <div><p style={props.getStyles} key={todo.id}>{todo.title}</p></div><div><i className="fa fas-mark"></i><button>Edit</button>&nbsp;
//         </div>
//         )
//     })}
//     </div>
//  ) 
 
//     // return (
//     //     <div>
            
//     //     </div>
//     // )
// }

// export default TodoLists


import React, { Component } from 'react'


 class TodoLists extends Component {
    getStyle = () =>{
        
        return{
            width: '500px',
            height: 'auto',
            margin: 'auto',
            padding: '5px',
            borderBottom: '1px solid grey',
            background: '#f4f4f4',
            textDecoration:  this.props.todo.isCompleted ? 'line-through' : 'none'
        }
        
    }
    render() {
        const {todo, markComplete} = this.props
        return (
        
        
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={markComplete.bind(this, todo.id)}/>{' '}
                    {todo.title}
                    <button onClick ={this.props.deleteItem.bind(this, todo.id)} style={deleteBtn} type="delete">X</button>
                </p>
            </div>
        
        )
    }
}



const deleteBtn={
    // borderRadius: '50%',
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '3px 10px',
    float: 'right',
    // width: '30px'


}
export default TodoLists
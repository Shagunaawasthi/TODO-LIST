import React, { Component } from 'react'; 
import TodoItem from './item.js';
import AddItem from './add.js';

class TodoComponent extends Component {
  //states
 constructor(props){
   super(props);
   this.state={
     todos:["wash","eat","nap","hi,hon","lol"],
   };
 } 
 
 onDelete = (item) => {
  var updatedTodos=this.state.todos.filter(function(val,index){
  return item!==val;
  });
  this.setState({
    todos:updatedTodos,
  });
 
  } 
  onAdd = (item)=>{
   var updatedTodos= this.state.todos;
   updatedTodos.push(item);
   this.setState({
     todos:updatedTodos
   })
  }
  
  
    render() {
     var todos=this.state.todos;
    return ( 
     <div id="todo-list">
       <p>busy todo list</p>
       <ul>
        {todos.map((item,index)=> (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        ))  }
       </ul>
       <AddItem onAdd={this.onAdd}/>
     </div> 
    );
  } 
      
 
}
export default TodoComponent;

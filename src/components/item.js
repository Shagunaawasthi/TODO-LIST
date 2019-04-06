import React, { Component } from 'react'; 
//todo-item
class TodoItem extends Component{
render(){
    return(
        <li>
            <div className="todo-item">
             <span className="item-name">{this.props.item}</span>
             <span className="item-delete" onClick={this.handleDelete}> X</span>
            </div>
        </li>
    );
}

handleDelete = () => {
    this.props.onDelete(this.props.item);
    }
}

export default TodoItem;
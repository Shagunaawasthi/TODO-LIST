import React, { Component } from 'react'; 
class AddItem extends Component{

    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" name="Add item" required ref="newItem"/>
            <input type="submit" value="hit me" onSubmit={this.handleChange}/>

            </form>
        );
    }
    handleSubmit = (event)=>{
        event.preventDefault();
     //   this.setState({[event.target.name]:event.target.value});
       this.props.onAdd(this.refs.newItem.value);
       }
 //handleChange = (event)=>{
        
        
    }
//}
export default AddItem; 
import React from 'react';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import {fetchTodo,editTodo} from '../../actions';


class EditTodo extends React.Component{
    componentDidMount(){
        this.props.fetchTodo(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        this.props.editTodo(formValues,this.props.match.params.id);
    }
    render(){
        if(this.props.auth.isSignedIn===false){
            return <h2>Please LogIn to access your todos!</h2>
        }
        if(!this.props.todo){
            return null;
        }
        const {todo}=this.props.todo;
        return(
            <div className="ui grid" style={{marginTop:'30px'}}>
                <div className="eight wide column">
                    <h3>Update Todo</h3>
                    <TodoForm onSubmit={this.onSubmit} initialValues={{todo}}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        todo:state.todos[ownProps.match.params.id],
        auth:state.auth
    }
}
export default connect(mapStateToProps,{fetchTodo,editTodo})(EditTodo);
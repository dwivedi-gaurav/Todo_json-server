import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos,createTodo} from '../../actions';
import {Link} from 'react-router-dom';
import TodoForm from './TodoForm';

class ListTodos extends React.Component{
    componentDidMount(){
        this.props.fetchTodos();
    }
    renderList=()=>{
        if(this.props.todos.length===0 ){
            return <h3>Nothing to do...!!!Chill!!!</h3>
        }
        return this.props.todos.map((todo)=>{
            return(
                <div className="item" key={todo.id}>
                    <div className="content">
                        {this.renderActionButtons(todo)}
                        {todo.todo}
                    </div>
                </div>
            )
        });
    }
    onSubmit=(formValues)=>{
        this.props.createTodo(formValues);
    }
    renderActionButtons=(todo)=>{
        return(
            <div>
                <Link to={`/todo/edit/${todo.id}`} className="ui right floated primary mini button">Edit</Link>
                <Link to={`/todo/delete/${todo.id}`} className="ui right floated red mini button">Delete</Link>
            </div>
        )
    }
    render(){
        if(this.props.auth.isSignedIn===false){
            return <h2>Please LogIn to access your todos!</h2>
        }
        return(
            <div className="ui grid" style={{marginTop:'30px'}}>
                <div className="eight wide column">
                    <TodoForm onSubmit={this.onSubmit} initialValues={{todo:""}}/>
                </div>
                <div className="eight wide column" style={{borderLeft:"1px solid #d4d4d5"}}>
                    <div className="ui segment">
                        <div className="ui relaxed ordered divided list">
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    const todos=Object.values(state.todos);
    const filtered=todos.filter((todo)=>{
        return todo.userId===state.auth.userId
    });
    return{
        todos:filtered,
        auth:state.auth
    }
}

export default connect(mapStateToProps,{fetchTodos,createTodo})(ListTodos);
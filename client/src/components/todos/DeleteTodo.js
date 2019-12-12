import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {fetchTodo,deleteTodo} from '../../actions';
import {Link} from 'react-router-dom'; 
import history from '../../history';

class DeleteTodo extends React.Component{
    componentDidMount(){
        this.props.fetchTodo(this.props.match.params.id);
    }
    renderActions=()=>{
        return(
            <div>
                <button className="ui negative button" onClick={()=>this.props.deleteTodo(this.props.match.params.id)}>Delete</button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </div>
        )
    }
    render(){
        if(this.props.auth.isSignedIn===false){
            return <h2>Please LogIn to access your todos!</h2>
        }
        return(
            <div>
                <Modal
                    header="Delete Todo"
                    content={`Are you sure you want to delete todo: ${this.props.todo?this.props.todo.todo:""}`} 
                    action={this.renderActions()}
                    onDismiss={()=>history.push('/')}
                />
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

export default connect(mapStateToProps,{fetchTodo,deleteTodo})(DeleteTodo); 
 
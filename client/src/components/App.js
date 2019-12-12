import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import history from '../history';
import ListTodos from './todos/ListTodos';
import DeleteTodo from './todos/DeleteTodo';
import EditTodo from './todos/EditTodo';


class App extends React.Component{
   
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ListTodos}/>
                        <Route path="/todo/delete/:id" component={DeleteTodo}/>
                        <Route path="/todo/edit/:id" component={EditTodo}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
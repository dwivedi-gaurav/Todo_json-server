import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {renderDelay} from '../renderDelay';

class TodoForm extends React.Component{

    renderInput=(formProps)=>{
        return(
            <div className="field">
                <input {...formProps.input} placeholder="Add your todo here..."/>
                {this.renderError(formProps.meta.touched,formProps.meta.error)}
            </div>
        )
    }

    renderError=(touched,error)=>{
        if(!touched){
            return null;
        }
        return(
            <div>
                <p style={{color:'red'}}>{error}</p>
            </div>
        );
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
        this.props.reset();
    }

    render(){
        console.log("Inside TodoForm:",this.props);
        return(
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="todo" component={this.renderInput} />
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const validate=(formValues)=>{
    const errors={};
    if(!formValues.todo){
        errors.todo="Enter todo";
    }
    return errors;
}

export default renderDelay(reduxForm({
    form:'TodoForm',
    validate
})(TodoForm));

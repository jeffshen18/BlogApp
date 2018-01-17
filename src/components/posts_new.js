import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  //Have to wire up to Field, field object contains event handlers to JSX that we are returning
  //generalize render field function
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          //field.input contains things like onChange, onBlur...
          //Fancy JSX that saves us from typing out onChange = {field.input.onChange} ...
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  //with ternary expressions, every before the question mark is evaluated
  //if it returns truthy value, then return the thing between ? and :
  //if falsey value, then return everything after :
  //touched means the user has focused into the input and then focused away

  onSubmit(values) {
    console.log(values);
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      //Field component is responsible for event handling and updating peices of state
      //component returns some amount of JSX that represents actually JSX rendered to screen
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title For Post"
          //component prop calls function that returns some amount of JSX
          //we do not call function here, but a reference to the function
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

//function to validate that correct information is being submitted
//calls automatically when user tries to submit the form
function validate(values) {
  // console.log(values)
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter a category";
  }

  if (!values.content) {
    errors.content = "Enter content";
  }
  //If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  //validate: validate,
  //validate option is a function that is called automatically when user tries to submit a form
  validate,
  form: 'PostsNewForm'
}) (PostsNew);

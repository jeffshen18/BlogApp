import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  //Have to wire up to Field, field object contains event handlers to JSX that we are returning
  //generalize render field function
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          //field.input contains things like onChange, onBlur...
          //Fancy JSX that saves us from typing out onChange = {field.input.onChange} ...
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      //Field component is responsible for event handling and updating peices of state
      //component returns some amount of JSX that represents actually JSX rendered to screen
      <form>
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

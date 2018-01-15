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
          label="Title"
          //component prop calls function that returns some amount of JSX
          //we do not call function here, but a reference to the function
          component={this.renderField}
        />
        <Field
          name="tags"
          label="Tags"
          component={this.renderField}
        />
        <Field
          name="tags"
          label="Post Content"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
}) (PostsNew);

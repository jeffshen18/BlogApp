import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  //Have to wire up to Field, field object contains event handlers to JSX that we are returning
  renderTitleField(field) {
    return (
      <div>
        <input
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
          //component prop calls function that returns some amount of JSX
          //we do not call function here, but a reference to the function
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
}) (PostsNew);

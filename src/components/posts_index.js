import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  //called one time automatically when component first renders
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

//Putting fetchPosts inside is the same as using mapDispatchToProps
//Whenever fetchPosts is being called, the the result is still being dispatched to all of our reducers
export default connect(null, { fetchPosts }) (PostsIndex);

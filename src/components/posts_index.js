import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  //called one time automatically when component first renders
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    //cannot map because it is a object, use lodash
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2> Posts </h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

//Putting fetchPosts inside is the same as using mapDispatchToProps
//Whenever fetchPosts is being called, the the result is still being dispatched to all of our reducers
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Input from '../components/input';
import { requestArticles, sendPost } from '../actions';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: 'abc-news',
        source: 'ABC News',
        author: 'ABC News',
        title: 'WATCH: What to know about the water challenge',
        description:
          "Dr. Jennifer Ashton kicks off a month-long 'Water Challenge' to look at how drinking more water can affect your health.",
        url: 'http://abcnews.go.com/GMA/video/water-challenge-52783678',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      post: {
        ...this.state.post,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // add post
    sendPost(this.state.post)
      .then(() => this.props.requestArticles())
      .catch(error => console.error(error));
    // clear all field
    this.setState({
      post: {
        id: 'the-verge',
        source: '',
        author: '',
        title: '',
        description: '',
        url: '',
      },
    });
  }

  render() {
    const { logged } = this.props;

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {logged ? (
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="id"
                        value={this.state.post.id}
                        onChange={this.handleChange}
                      >
                        <option value="the-verge">The Verge</option>
                        <option value="the-next-web">The Next Web</option>
                        <option value="abc-news">ABC News</option>
                      </select>
                    </div>
                  </div>
                </div>
                <Input
                  label="Source"
                  name="source"
                  onChange={this.handleChange}
                  value={this.state.post.source}
                />
                <Input
                  label="Author"
                  name="author"
                  onChange={this.handleChange}
                  value={this.state.post.author}
                />
                <Input
                  label="Title"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.post.title}
                />
                <Input
                  label="Description"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.post.description}
                />
                <Input
                  label="Link to article"
                  name="url"
                  onChange={this.handleChange}
                  value={this.state.post.url}
                />
                <div className="field">
                  <div className="control has-text-centered">
                    <button type="submit" className="button is-primary">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <Fragment>
                <p className="is-size-5">
                  Please login or signup for adding posts
                </p>
                <br />
                <div className="field is-grouped">
                  <p className="control">
                    <Link className="button is-primary" to="/login">
                      LogIn
                    </Link>
                  </p>
                  <p className="control">
                    <Link className="button is-info" to="/signup">
                      SignUp
                    </Link>
                  </p>
                </div>
              </Fragment>
            )}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.logged,
});

const mapDispatchToProps = {
  requestArticles,
};

AddPost = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));
export default AddPost;

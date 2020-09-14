import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' }
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: { title: this.state.title },
      // here we cannot use this.props.data.refetch() as query is not associated with this component
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
      //.catch(() => ...)
  }

  render() {
    return(
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input 
            onChange={event => this.setState({ title: event.target.value })} 
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

// How to get data from the state of the compontent
// to an mutation variable outside of the class?
// => pass a mutation in graphql helper
// => this.props.mutate()
const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
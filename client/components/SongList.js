import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchSongs';
import { Link } from 'react-router';
 

class SongList extends Component {

  onSongDelete(id) {
    // here we can use this.props.data.refetch() as query is associated with this component
    // but we can also use refetchQueries: [{ query }] to be consistent
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch()); // refetches all queries of the component
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>
            {title}
          </Link>
          <i 
            className="material-icons"
            onClick={() => this.onSongDelete(id)}  
          >
            delete
          </i>
        </li>
      ) 
    })
  }

  render() {

    if (this.props.data.loading) { return <div>Loading...</div>; }
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

// bond query to component -> executes the query when component is printend on the screen
// returning data is in props
// component is rendered two times, first time and then after data is returned because it rerenders then
// graphql library creates .data on this.props object
// because of songs in query, the data is in this.props.data.songs
export default graphql(mutation)(
  graphql(query)(SongList)
);
/* eslint-disable react/destructuring-assignment */
import React, { Component} from 'react';
// eslint-disable-next-line import/extensions
import Gif from './gif.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className="gif-list">

        { this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} />;
        })}
      </div>
    );
  }
}

export default GifList;

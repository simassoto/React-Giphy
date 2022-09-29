import React, { Component} from 'react';

class Gif extends Component {

 handleClick = () => {
  if(this.props.selctedGif) {
    this.props.selctedGif(this.props.id)}
 }


  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

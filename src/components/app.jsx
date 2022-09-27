import React, { Component } from "react";
import giphy from 'giphy-api';

// eslint-disable-next-line import/extensions
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
// eslint-disable-next-line import/extensions
import GifList from './gif_list.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs:[],
      selectedGifId: "9nZKqcn4phkT30zeN8"
    }

    this.search("mogli");

  }

  search = (query) => {
    giphy('zR7Q0Z7R4gDboAXP7CKJCr82JbARqRKu').search({
      q: query,
      rating: 'g'
  },  (error, result) => {
     this.setState({gifs: result.data
    });
  });
  }


  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction = {this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

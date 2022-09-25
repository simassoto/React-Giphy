import React, { Component } from "react";

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    const gifs = [
      {id:"9nZKqcn4phkT30zeN8" }

    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
          <Gif id="9nZKqcn4phkT30zeN8"/>
          </div>
        </div>
        <div className="right-scene">
          <GiftList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;

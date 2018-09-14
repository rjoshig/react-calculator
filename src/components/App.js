import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          {<Header />}
      </div>
    ); 
  }
}

//export default hot(module)(App)
export default App;
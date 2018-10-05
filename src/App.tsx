import * as React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div className="font-sans">
        <Header />
      </div>
    );
  }
}

export default App;

import { Component } from 'inferno';
import { SiteNavigation } from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNavigation />
      </div>
    );
  }
}

export default App;

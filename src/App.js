import logo from './logo.svg';
import './App.css';

import Nav from './components/nav/Nav';
import Comic from './components/comics/Comic';

function App() {
  return (
    <div className="App">
      <Nav />
      <Comic />
      <Comic />
      <Comic />
    </div>
  );
}

export default App;

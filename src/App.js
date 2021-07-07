import logo from './logo.svg';
import './App.css';
import Increment from './component/increment/increment';

function App() {
  return (
    <div className="App">
      <Increment inc={6}/>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Navigation/>
    </div>
  );
}

export default App;

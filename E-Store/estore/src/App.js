import  TopNav  from "./Components/TopNav";
import './App.css';
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;

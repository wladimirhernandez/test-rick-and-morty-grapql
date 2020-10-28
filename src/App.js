import "./App.css";
import Header from "./components/header";
import Characters from "./components/characters";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-4">
        <Characters />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";

function App() {
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <SuperheroList />
      <SuperheroForm />
    </div>
  );
}

export default App;

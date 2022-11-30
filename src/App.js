import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CreateSuperheroPage from './components/CreateSuperheroPage';
import EditSuperheroPage from './components/EditSuperheroPage';
import NavBar from './components/NavBar';
import SuperheroDetail from './components/SuperheroDetail';
// import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Superheroes</h1>
        <Routes>
          <Route path="/" element={<SuperheroList />} />
          <Route path="/create" element={<CreateSuperheroPage />} />
          <Route path="/edit/:id" element={<EditSuperheroPage />} />
          <Route path="/detail/:id" element={<SuperheroDetail />} />
        </Routes>
      </Router>
      {/* <SuperheroDetail id={superheroId} />
      <SuperheroForm />
      <SuperheroList setSuperheroId={setSuperheroId} /> */}
    </div>
  );
}

export default App;

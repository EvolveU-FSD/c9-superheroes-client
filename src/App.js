import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CreateSuperheroPage from './components/CreateSuperheroPage';
import EditSuperheroPage from './components/EditSuperheroPage';
import Home from './components/Home';
import Portal from './components/Portal';
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroList from './components/SuperheroList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Portal />}>
            <Route path="/superheroes" element={<SuperheroList />} />
            <Route
              path="/superheroes/edit/:id"
              element={<EditSuperheroPage />}
            />

            <Route
              path="/superheroes/create"
              element={<CreateSuperheroPage />}
            />
            <Route
              path="/superheroes/detail/:id"
              element={<SuperheroDetail />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

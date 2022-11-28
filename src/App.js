import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Portal from './components/Portal';
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Portal />}>
            <Route path="/superheroes" element={<SuperheroList />} />
            <Route path="/superheroes/create" element={<SuperheroForm />} />
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

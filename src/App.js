import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SimpleBottomNavigation from './components/MainNv';
import Header from './components/header/header';
import trending from './pages/trending/trending';
import movies from './pages/movies/movies';
import search from './pages/search/search';
import series from './pages/series/series';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path="/" component={trending} exact />
          <Route path="/movies" component={movies} />
          <Route path="/series" component={series} />
          <Route path="/search" component={search} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;

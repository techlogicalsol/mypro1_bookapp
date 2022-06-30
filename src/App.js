import './App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BookDetail from './components/BookDetail';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookDetail/:id" component={BookDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;

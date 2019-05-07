import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render () {
  return (
    <Router>
      <div>
        <Header/>
          <Route exact path="/" component={Home} />
				  <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/social-media" component={Social-Media} />
          <Route path="/contact" component={Contact} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import NotFoundPage from '../components/NotFoundPage';
import Navigation from '../components/Navigation/Navigation';
import Resume from '../components/Resume/Resume';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import Blogs from '../components/Blogs/Blogs';

const Routers = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} exact/>
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/resume" component={Resume} />
        <Route path="/blogs" component={Blogs} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default Routers;
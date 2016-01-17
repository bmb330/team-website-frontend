import React from 'react';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import CurrentProjects from './CurrentProjects';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <AboutUs />
        <CurrentProjects />
      </div>
    );
  }
}

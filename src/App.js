import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'
import Posts  from './components/posts'
import Post   from './components/post'

function App() {
  return (
    <Router>
      <Header />
      <main role='main' className='container'>
        <div className='row'>
          <div className='col-8 blog-main'>
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route path='/:slug' component={Post} />
            </Switch>
          </div>
          <aside className='col-md-4 blog-sidebar'>
            <div className='p-3 mb-3 bg-light rounded'>
              <h4 className='font-italic'>About</h4>
              <p className='mb-0'>
                <em>
                  The sole purpose of this blog is to gather lessons learned from technical challenges I've been facing over the years.
                  <br/>
                  It was about time to move all my notes and scribbles to one place - the cloud.
                  <br/>
                </em>
                - YF
              </p>
            </div>
            <div className='p-3'>
              <h4 className='font-italic'>Questions?</h4>
              <ol className='list-unstyled'>
                <li>
                  <a href='mailto:yaro.filyk@gmail.com' target='_blank'>Email</a>
                </li>
                <li>
                  <a href='https://github.com/Yaroslav-F' target='_blank'>GitHub</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/yaroslavfilyk/' target='_blank'>LinkedIn</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </Router>
  );
}

export default App;

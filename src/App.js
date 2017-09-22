import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import BaseLayout from './components/BaseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={PostList} />
            <Route path='/newpost' component={CreatePost} />
            <Route path='/showpost/:id' component={ShowPost} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;

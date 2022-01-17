import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog/AddBlog';
import DeleteBlog from './components/DeleteBlog/DeleteBlog';
import Home from './components/Home/Home';
import TopSection from './components/TopSection/TopSection';

function App() {
  return (
    <div>
      <Router>
        <TopSection />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addblog">
            <AddBlog />
          </Route>
          <Route path="/deleteblog">
            <DeleteBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

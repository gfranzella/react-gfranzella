import './App.css';
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



function App() {

  return (
    <Router >
      <Layout>
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/blog/" component={BlogPage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Layout>
    </Router>
  );
}

export default App;

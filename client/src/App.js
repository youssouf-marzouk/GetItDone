import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//components
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
//style
import './App.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {

  return (
    <ErrorBoundary>
      <Router>
        <div id="wrapper">
          <Header classes='alt'/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
          </Switch>
        </div>
        <Menu/>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/index';
import AuthProvider from './context/AuthContext';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import UpdateProfile from './components/UpdateProfile';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
export default App;

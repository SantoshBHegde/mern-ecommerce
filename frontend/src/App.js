import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/User/Home';
import ProductDetail from './pages/User/ProductDetail';
import Cart from './pages/User/Cart';
import Wishlist from './pages/User/Wishlist';
import Checkout from './pages/User/Checkout';
import Login from './pages/Common/Login';
import Register from './pages/Common/Register';
import ResetPassword from './pages/Common/ResetPassword';
import ForgotPassword from './pages/Common/ForgotPassword';

import './App.css';

function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/product/:id" exact><ProductDetail /></Route>
              <Route path="/cart" exact><Cart /></Route>
              <Route path="/wishlist" exact><Wishlist /></Route>
              <Route path="/checkout" exact><Checkout /></Route>
              
              <Route path="/login" exact><Login /></Route>
              <Route path="/register" exact><Register /></Route>
              <Route path="/resetpassword" exact><ResetPassword /></Route>
              <Route path="/forgotpassword" exact><ForgotPassword /></Route>
          </Switch>
      </Router>
  );
}

export default App;

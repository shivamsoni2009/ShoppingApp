import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShipingScreen from "./screens/ShipingScreen";
import PaymentScreen from "./screens/PaymentScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path='/shipping' component={ShipingScreen} exact />
          <Route path='/payment'  component={PaymentScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />

        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

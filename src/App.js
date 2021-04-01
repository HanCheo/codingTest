import Home from "./pages/home";
import Cart from "./pages/cart";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    </>
  );
}

export default App;

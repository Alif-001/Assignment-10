import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Services from "./components/Pages/Services/Services";
import ShowDetails from "./components/Pages/ShowDetails/ShowDetails";
import AuthProvider from "./context/AuthProvider";
import PrivetRoute from "./PrivateRoute/PrivateRoute";
import Blogs from "./components/Pages/Blogs/Blogs";
import Faq from "./components/Pages/Faq/Faq";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute exact path="/services/:id">
            <ShowDetails></ShowDetails>
          </PrivetRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <PrivetRoute path="/services">
            <Services></Services>
          </PrivetRoute>
          <PrivetRoute path="/blogs">
            <Blogs></Blogs>
          </PrivetRoute>
          <PrivetRoute path="/contact">
            <Contact></Contact>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

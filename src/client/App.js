import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meals from "./mealComponent/Meals";
import Reservations from "./mealComponent/Reservations";
import AddReservation from "./mealComponent/AddReservation";
import Review from "./mealComponent/Review";
import Nav from "./mealComponent/Nav";
import Footer from "./mealComponent/Footer";
import Header from "./mealComponent/Header";
import SpecificId from "./mealComponent/SpecificId";
import About from "./mealComponent/About";
import HomePage from "./mealComponent/HomePage";

import "./Meal.css";

function App() {
  const api = "http://localhost:3000";
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route path="/meals" exact component={Meals}></Route>
        <Route path="/reservations" exact component={Reservations}></Route>
        <Route path="/addreservation" exact component={AddReservation}></Route>
        <Route path="/review" exact component={Review}></Route>
        <Route path="/id" exact component={SpecificId}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

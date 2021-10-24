import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

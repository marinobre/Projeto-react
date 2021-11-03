import './App.css';
import './assets/css/font-awesome.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

import Header from './components/template/header/Header';
import Sidebar from './components/template/sidebar/Sidebar';
import Footer from './components/template/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

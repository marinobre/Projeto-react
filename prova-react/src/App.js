import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';


import Header from './components/template/header/Header';
import Home from './pages/Home';
import Footer from './components/template/footer/Footer';


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;

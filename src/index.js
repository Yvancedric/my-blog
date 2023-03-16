import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Composants/Header';
import Nav from './Composants/Nav';
import Myfirstsection from './Composants/Section';
import Mysecondsection from './Composants/Sectionsecond';
import Myfooter from './Composants/Footer';

function App() {

  return(

    <>

      <Header />

      <Nav />

      <Myfirstsection />

      <Mysecondsection />

      <Myfooter />

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

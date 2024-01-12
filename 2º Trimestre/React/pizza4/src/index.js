import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}

function Header() {
  /*const style = {color:"red", fontSize:"48px", textTransform:"uppercase"}*/ 
  return (
  <header className="header">
    <h1>Pizzería La Coracha</h1>
      </header>);
}

function Menu() {
  return (
  <main className="menu">
    <h2>Menú</h2>
    <p>Desde 1984</p>
    <Pizza1/>
    <Pizza2/>
  </main>
  );
}

function Pizza1() {
  return (
  <div className="pizza">
    <img src="pizzas/funghi.jpg" alt="Funghi"/>
    <h2>Funghi</h2>
    <p>Pizza de funghi con salsa de tomate y queso parmesano.</p>
    <p>{50}€</p>
  </div>);
}

function Pizza2() {
  return (
  <div className="pizza">
    <img src="pizzas/focaccia.jpg" alt="Focaccia"/>
    <h2>Focaccia</h2>
    <p>Focaccia Caccio Pepe.</p>
    <p>{100}€</p>
  </div>);
}

function Footer() {
  return (
  <footer className="footer">
    <div className="order">
    <p>Tel: +34 12345678</p>
    <button>order</button>
    </div>
  </footer>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



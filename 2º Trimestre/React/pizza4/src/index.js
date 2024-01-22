import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  return (
    <div>
    <Header />
    <Menu />
    <Footer />
    </div>
  );
}

function Header() {
  /*const style = {color:"red", fontSize:"48px", textTransform:"uppercase"}*/ 
  return (
  <header  className="header">
    <h1>Pizzería La Coracha</h1>
      </header>);
}

function Menu() {

  

  return (
  <main className="menu">
    <h2>Menú</h2>
    <p>Desde 1984</p>
    
    <ul className="Pizzas">
    {pizzaData.map((itemPizza) => 
    <Pizza 
    imagen={itemPizza.photoName}
    nombre={itemPizza.name}
    ingredientes={itemPizza.ingredients}
    precio={itemPizza.price}
    />)
    }
    </ul>

    {/*Forma 1 - con props
    <Pizza imagen="pizzas/funghi.jpg" nombre="Funghi" ingredientes="Tomate y queso" precio={50}/> 
    <Pizza imagen="pizzas/focaccia.jpg" nombre="Focaccia" ingredientes="Queso y pimienta" precio={100}/> 
    <Pizza imagen="pizzas/salamino.jpg" nombre="Salamino" ingredientes="Tomate, queso y salami" precio={100}/>
    */}

  </main>
  );
}

/*Forma 1 - con props
{function Pizza(props) {
  return (
  <li className="pizza">
    <img src={props.imagen}alt={props.nombre}/>
    <h2>{props.nombre}</h2>
    <p>{props.ingredientes}</p>
    <p>{props.precio}€</p>
  </li>);
}}
*/

function Pizza({imagen, nombre, ingredientes, precio}) {
  return (
  <li className="pizza">
    <img src={imagen}alt={nombre}/>
    <h2>{nombre}</h2>
    <p>{ingredientes}</p>
    <p>{precio}€</p>
  </li>);
}



function Footer() {
  return (
  <footer className="footer">
    <div className="order">
    <p>Tel: +34 12345678</p>
    <button>Hacer pedido</button>
    </div>
  </footer>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



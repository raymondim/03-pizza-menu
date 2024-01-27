import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  const x = 'blah';
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Coffee N' Comics</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            tempore voluptatem nobis amet, consectetur adipisci magnam? Sunt,
            recusandae. Cumque, dolores facere consectetur ipsam eaque ea!
            Soluta repudiandae numquam nostrum dolorem!
          </p>

          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>No Pizza for you!</p>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza${props.soldOut ? ' sold-out' : ''}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? 'SOLD OUT' : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(`Is Open: ${isOpen}`);
  console.log(hour);

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );

  return (
    <footer className='footer'>
      {/*{new Date().toLocaleTimeString()} We're currently open!*/}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}

      {/*isOpen ? <p>OPEN</p> : <p>CLOSED</p>*/}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online. </p>
      <button className='btn'>Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Greeter from "./component/Greeter.jsx";
import Counter from "./component/counter.jsx";
import Mood from "./component/Mood.jsx";
import Cart from "./component/Cart.jsx";
import "./App.css";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Cart initialItems={items} />
      <h1>Hello from the App!!</h1>
      <Greeter name="Karen" age="62" excitement={4} />
      <Counter />
      <Mood />
    </div>
  );
}

export default App;

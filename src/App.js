import React from "react";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Coffee Mug",
    price: 70,
  },
  {
    id: 2,
    name: "Box",
    price: 10,
  },
  {
    id: 3,
    name: "Bottol",
    price: 40,
  },
];

function App() {
  return (
    <div>
      <section>Cart Items - 0</section>          
      <section>Total Cart Price - 0</section> 
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
